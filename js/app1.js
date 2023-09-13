// ===============modal inicio================

window.addEventListener("load", function() {
    const modal = document.getElementById("modalMain");
    modal.style.display = "block";
});

//================modal vehículos=============

// Obtener elementos del DOM

const btnMostrarModal = document.getElementById("mostrarModal");
const modal = document.getElementById("miModal");
const btnCerrarModal = document.getElementById("cerrarModal");

modal.innerHTML = `<div class="modalContenido">
<span class="cerrar" id="cerrarModal">&times;</span>
<div class="vehiculos__presentacion">
    <div class="vehiculos__presentacion__imgrande">
    <img src="${vehiculos.img1}" alt=""
    loading="lazy">
    </div>
    <div class="vehiculos__presentacion__imguno">
        <img src="${vehiculos.img2}" alt=""
                loading="lazy">
    </div>
    <div class="vehiculos__presentacion__imgdos">
        <img src="${vehiculos.img3}" alt=""
                loading="lazy">
    </div>
    <div class="vehiculos__presentacion__imgtres">
        <img src="${vehiculos.img4}" alt=""
                loading="lazy">
    </div>
    <div class="vehiculos__presentacion__imgcuatro">
        <img src="${vehiculos.img5}" alt=""
                loading="lazy">
    </div>
    <div class="vehiculos__presentacion__caracteristicas">
        <hr>
        <h2>${vehiculos.nombre}</h2>
        <hr>
        <h3>Modelo: ${vehiculos.modelo}</h3>
        <hr>
        <h3>Motor: ${vehiculos.motor}</h3>
        <hr>
        <p>${vehiculos.descripcion}</p>
    </div>
</div>
</div>`

// ===============Buscar elementos=================

const id_buscar = document.getElementById("id-buscar")


// let buscarParticulares = document.getElementById("btn-particulares")
// buscarParticulares.addEventListener("click", function(){
//     const camiones = document.getElementById("id-camiones")
//         camiones.style.display = "none"                                                                         
//     })





// Abrir el modal al hacer clic en el botón
btnMostrarModal.addEventListener("click", function() {
    modal.style.display = "block";
});

// Cerrar el modal al hacer clic en el botón de cerrar o fuera del modal
btnCerrarModal.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


// Clase vehiculos
class vehiculos {
    constructor(img1, img2, img3, img4, img5, nombre, modelo, motor, descripcion, empresa = null) {
        
        this.img1 = img1
        this.img2 = img2
        this.img3 = img3
        this.img4 = img4
        this.img5 = img5
        this.nombre = nombre;
        this.modelo = modelo;
        this.motor = motor 
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.arreglo = [];
    }

    agregar(vehiculos) {
        this.arreglo.push(vehiculos);
    }

    buscarNombre(nombre) {
        return this.arreglo.filter(vehiculos => vehiculos.nombre.toLowerCase() === nombre.toLowerCase());
    }

    buscarModelo(modelo) {
        return this.arreglo.map(vehiculos => vehiculos.modelo.toLowerCase() === modelo.toLowerCase());
    }

    buscarEmpresa(empresa) {
        return this.arreglo.map(taxi => taxi.empresa && taxi.empresa.toLowerCase() === empresa.toLowerCase());
    }
}

// Crear instancias de vehiculos, camiones, motocicletas y taxis
const v1 = new vehiculos("./img/chevrolet.jpg", "./img/chevroletfrente.jpg", "./img/chevroletatras.jpg", "./img/chevroletinterior.jpg", "./img/chevroletmotor.jpg", "Chevrolet Camaro 6.2 Ss", "2018", "6200 gasolina", "Con un motor V8 de 6.2 litros bajo el capó, el Camaro es capaz de generar una impresionante potencia de 455 caballos de fuerza, lo que significa que podrá acelerar de 0 a 100 km/h en menos de 4 segundos. Pero este vehículo no es solo potencia bruta, sino también refinamiento técnico: cuenta con una transmisión automática de 10 velocidades, frenos de disco en las cuatro ruedas y una suspensión ajustable de manera electrónica que garantizan un manejo seguro y ágil."   );


// Agregar vehiculos al arreglo
v1.agregar(v1);


// Llamar a los métodos de búsqueda en instancias específicas
console.log("Búsqueda por nombre:");
console.log(v1.buscarNombre("toyota"));  // Buscar vehiculos por nombre



// do {
//     alert("Bienvenidos al Catalogo Virtual")
//     let inicio = prompt("¿deseas consultar?\n\nNombre\nReferencia\nClase\nEmpresa").toLowerCase();
//     if (inicio === "nombre"){
//         console.log(v1.buscarNombre("toyota"));
//     }
//     else if(inicio === "referencia"){
//         console.log(v2.buscarClase("mazda 2"));
//     }
//     else if(inicio === "clase"){
//         console.log(c1.buscarReferencia("particulares"));
//     }
//     else if(inicio === "empresa"){
//         console.log(t1.buscarEmpresa("coopebombas"));
//     }
//     else {
//         inicio
//     }
    
//     rta = prompt("¿Desea finalizar la busqueda de vehículos? (escriba 'SI' para finalizar o aceptar para continuar)").toLowerCase();
// } while (rta !== "si");

