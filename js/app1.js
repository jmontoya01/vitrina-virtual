
//================modal vehículos=============

// Obtener elementos del DOM

const btnMostrarModal = document.getElementById(`${vehiculos.id}`);
const modal = document.getElementById("miModal");
const btnCerrarModal = document.getElementById("cerrarModal");

modal.innerHTML = `<div class="modalContenido">
<span class="cerrar" id="cerrarModal">&times;</span>
<div class="vehiculos__presentacion">
    <div class="vehiculos__presentacion__imgrande">
    <img src="${vehiculosModal.img1}" alt=""
    loading="lazy">
    </div>
    <div class="vehiculos__presentacion__imguno">
        <img src="${vehiculosModal.img2}" alt=""
                loading="lazy">
    </div>
    <div class="vehiculos__presentacion__imgdos">
        <img src="${vehiculosModal.img3}" alt=""
                loading="lazy">
    </div>
    <div class="vehiculos__presentacion__imgtres">
        <img src="${vehiculosModal.img4}" alt=""
                loading="lazy">
    </div>
    <div class="vehiculos__presentacion__imgcuatro">
        <img src="${vehiculosModal.img5}" alt=""
                loading="lazy">
    </div>
    <div class="vehiculos__presentacion__caracteristicas">
        <hr>
        <h2>${vehiculosModal.nombre}</h2>
        <hr>
        <h3>Modelo: ${vehiculosModal.modelo}</h3>
        <hr>
        <p>${vehiculosModal.descripcion}</p>
    </div>
</div>
</div>`

// ===============Buscar elementos=================

const id_buscar = document.getElementById("id-buscar")

// Abrir el modal al hacer clic en el botón
btnMostrarModal.addEventListener("click", function () {
    modal.style.display = "block";
});

// Cerrar el modal al hacer clic en el botón de cerrar o fuera del modal
btnCerrarModal.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


// Clase vehiculos
class vehiculosModal {
    constructor(img1, img2, img3, img4, img5, nombre, modelo, descripcion,) {

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
        this.arregloModal = [];
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
const v1 = new vehiculos("./img/chevrolet.jpg", "./img/chevroletfrente.jpg", "./img/chevroletatras.jpg", "./img/chevroletinterior.jpg", "./img/chevroletmotor.jpg", "Chevrolet Camaro 6.2 Ss", "2018", "6200 gasolina", "Con un motor V8 de 6.2 litros bajo el capó, el Camaro es capaz de generar una impresionante potencia de 455 caballos de fuerza, lo que significa que podrá acelerar de 0 a 100 km/h en menos de 4 segundos. Pero este vehículo no es solo potencia bruta, sino también refinamiento técnico: cuenta con una transmisión automática de 10 velocidades, frenos de disco en las cuatro ruedas y una suspensión ajustable de manera electrónica que garantizan un manejo seguro y ágil.");


// Agregar vehiculos al arreglo
v1.agregar(v1);


// Llamar a los métodos de búsqueda en instancias específicas
console.log("Búsqueda por nombre:");
console.log(v1.buscarNombre("toyota"));  // Buscar vehiculos por nombre


{/* <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div> */}


class vehiculosGuardados{
    constructor(){
        this.arregloVG = []
    }

    agregarVG(vehiculoNuevo){
        let fueGuardado = this.arregloVG.some(vehiculos => vehiculos.idModal == vehiculoNuevo.idModal)
        if (!fueGuardado){
            this.arregloVG.push(vehiculoNuevo)
        }
        
    }

    guardarVStorage(){
        let arregloVGJson = JSON.stringify(this.arregloVG)
        localStorage.setItem("arregloVG", arregloVGJson)

    }

    mostrarStorageVG(){
        let arregloVGJson = localStorage.getItem("arregloVG")
        let parseoArregloVG = JSON.parse(arregloVGJson)
        let arregloStorageVG = []
        parseoArregloVG.forEach(vehiculos => {
            let nuevoV = new vehiculosGuardados (vehiculos.idModal, vehiculos.idCarouser, vehiculos.img1, vehiculos.img2, vehiculos.img3, vehiculos.img4, vehiculos.img5, vehiculos.precio, vehiculos.nombre, vehiculos.modelo, vehiculos.referencia,)
            arregloStorageVG.push(nuevoV)
        })
        this.arregloVG = arregloStorageVG
    }

    mostrarVehiculosG() {
        let contenedorVG = document.getElementById("contenedorVG")
        contenedorVG.innerHTML = ""
        this.arregloVG.forEach(vehiculos => {
            contenedorVG.innerHTML += vehiculos.cardVG()
        })
    }

}