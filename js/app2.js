class Vehiculo {
    constructor(nombre, precio, referencia) {
        this.nombre = nombre;
        this.precio = precio;
        this.referencia = referencia;
        this.cantidad = 0;
    }

    agregarCantidad(cantidadDeseada) {
        this.cantidad += cantidadDeseada;
    }

    descripcion() {
        return `Nombre: ${this.nombre}, Precio: $${this.precio}, Referencia: ${this.referencia}\n`;
    }

    descripcionCarrito() {
        return `Nombre: ${this.nombre}, Precio: $${this.precio}, Referencia: ${this.referencia}, Cantidad: ${this.cantidad}\n`;
    }
}

class Carrito {
    constructor() {
        this.listaCarrito = [];
    }

    agregar(vehiculoNuevo) {
        const existe = this.listaCarrito.some(vehiculo => vehiculo.referencia === vehiculoNuevo.referencia);
        if (!existe) {
            this.listaCarrito.push(vehiculoNuevo);
        }
    }

    mostrar() {
        let descripcionListaCompra = "Carrito:\n\n";
        this.listaCarrito.forEach(vehiculo => {
            descripcionListaCompra += vehiculo.descripcionCarrito();
        });
        return descripcionListaCompra;
    }

    calcularTotal() {
        return this.listaCarrito.reduce((total, vehiculo) => total + vehiculo.precio * vehiculo.cantidad, 0);
    }
}

class VehiculoController {
    constructor() {
        this.listaVehiculos = [];
    }

    agregar(vehiculo) {
        this.listaVehiculos.push(vehiculo);
    }

    mostrar() {
        let descripcionListaVehiculos = "Recuerde la referencia del vehículo que desea comprar\n\n";
        this.listaVehiculos.forEach(vehiculo => {
            descripcionListaVehiculos += vehiculo.descripcion();
        });
        return descripcionListaVehiculos;
    }

    buscarReferencia(referencia) {
        return this.listaVehiculos.find(vehiculo => vehiculo.referencia === referencia);
    }
}

const v1 = new Vehiculo("Toyota", 95000, "lc200");
const v2 = new Vehiculo("Mazda", 25000, "mazda 2");
const v3 = new Vehiculo("Renault", 75000, "koleos");
const v4 = new Vehiculo("Chevrolet", 88000, "camaro");

const carrito = new Carrito();
const controladorV = new VehiculoController();

controladorV.agregar(v1);
controladorV.agregar(v2);
controladorV.agregar(v3);

let rta;

do {
    alert(controladorV.mostrar());

    const referencia = prompt("Ingrese la referencia del vehículo que desea comprar:");
    const vehiculo = controladorV.buscarReferencia(referencia);

    const cantidadDeseada = Number(prompt("Ingrese la cantidad que desea:"));
    vehiculo.agregarCantidad(cantidadDeseada);

    carrito.agregar(vehiculo);

    alert(carrito.mostrar());

    rta = prompt("¿Desea finalizar la compra? (escriba 'SI' para finalizar o aceptar para continuar)").toLowerCase();
} while (rta !== "si");

alert(`El total es de: $${carrito.calcularTotal()}`);