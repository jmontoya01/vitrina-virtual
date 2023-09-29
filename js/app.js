
//================Tarjetas vehículos=============



class vehiculos {
    constructor(idModal, idCarouser, img1, img2, img3, img4, img5, precio, nombre, modelo, referencia,) {
        this.idModal = idModal
        this.idCarouser = idCarouser
        this.img1 = img1
        this.img2 = img2
        this.img3 = img3
        this.img4 = img4
        this.img5 = img5
        this.precio = precio
        this.nombre = nombre
        this.modelo = modelo
        this.referencia = referencia

    }

    cardCV() {
        return `
        <article class="tarjeta">
            <div class="tarjeta__cuerpo">
                <a href="">
                <div id="${this.idCarouser}" class="carousel slide carousel-fade">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${this.img1}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${this.img2}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${this.img3}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${this.img4}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${this.img5}" class="d-block w-100" alt="...">
                        </div>
                    </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${this.idCarouser}"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${this.idCarouser}"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                </a>
                <h2 class="precio">Precio $ ${this.precio}</h2>
                <hr>
                <p class="nombre">${this.nombre}</p>
                <p class="modelo">modelo | ${this.modelo}</p>
                <p class="referencia">${this.referencia}</p>
                <button class="vehiculos__btn" id="g-${this.idModal}">Guardar vehículo</button>
            </div>
        </article>`
    }

    cardVG() {
        return `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${this.img1}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${this.nombre}</h5>
                    <p class="card-text">precio$ ${this.precio}</p>
                    <p class="card-text">modelo: ${this.modelo}</p>
                    <p class="card-text">${this.referencia}</p>
                    <button class="btn btn-danger" id="evg${this.idModal}">Eliminar</button>
                </div>
            </div>
        </div>
    </div>`
    }
    buscarVehiculoPorId(id) {
        return this.arregloVehiculos.find(vehiculo => vehiculo.id === id);
    }
}



class controladorVehículos {
    constructor() {
        this.arregloVehiculos = []
    }

    agregarV(vehiculos) {
        this.arregloVehiculos.push(vehiculos)
    }

    cargarVehiculos() {
        // ==========Crear instancias de particulares==============

        const p1 = new vehiculos("modal1", "carousel1", "./img/chevrolet.jpg", "./img/chevroletatras.jpg", "./img/chevroletfrente.jpg", "./img/chevroletinterior.jpg", "./img/chevroletmotor.jpg", "158.000.000", "Chevrolet Camaro SS", "2018", "25.000 kilometros | unico dueño")
        const p2 = new vehiculos("modal2", "carousel2", "./img/mazda.jpg", "./img/mazdaatras.jpg", "./img/mazdafrente.jpg", "./img/mazdainterior.jpg", "./img/mazdamotor.jpg", "78.000.000", "Mazda 2", "2021", "15.000 kilometros | unico dueño")
        const p3 = new vehiculos("modal3", "carousel3", "./img/renault.jpg", "./img/renaultatras.jpg", "./img/renaultfrente.jpg", "./img/renaultinterior.jpg", "./img/renaultmotor.jpg", "148.000.000", "Renault Koleos", "2022", "12.000 kilometros | unico dueño")
        const p4 = new vehiculos("modal4", "carousel4", "./img/toyota.jpg", "./img/toyota2.jpg", "./img/toyota3.jpg", "./img/toyota4.jpg", "./img/toyota.jpg", "458.000.000", "Toyota LC200", "2021", "35.000 kilometros | unico dueño")

        // ==============Crear instancias de camiones================

        const c1 = new vehiculos("modal5", "carousel5", "./img/camiones.jpg", "./img/camionfrente.jpg", "./img/camionatras.jpg", "./img/camioninterior.jpg", "./img/camionmotor.jpg", "155.000.000", "Chevrolet NHR", "2016", "148.000 kilometros")
        const c2 = new vehiculos("modal6", "carousel6", "./img/camiones.jpg", "./img/camionfrente.jpg", "./img/camionatras.jpg", "./img/camioninterior.jpg", "./img/camionmotor.jpg", "175.000.000", "Chevrolet FRR", "2018", "158.000 kilometros")
        const c3 = new vehiculos("modal7", "carousel7", "./img/camiones.jpg", "./img/camionfrente.jpg", "./img/camionatras.jpg", "./img/camioninterior.jpg", "./img/camionmotor.jpg", "145.000.000", "Chevrolet NQR", "2015", "168.000 kilometros")
        const c4 = new vehiculos("modal8", "carousel8", "./img/camiones.jpg", "./img/camionfrente.jpg", "./img/camionatras.jpg", "./img/camioninterior.jpg", "./img/camionmotor.jpg", "165.000.000", "Chevrolet NPR", "2017", "138.000 kilometros")

        // ===========Agregar los vehículos a su arreglo controladorVehiculos================

        controladorV.agregarV(p1)
        controladorV.agregarV(p2)
        controladorV.agregarV(p3)
        controladorV.agregarV(p4)
        controladorV.agregarV(c1)
        controladorV.agregarV(c2)
        controladorV.agregarV(c3)
        controladorV.agregarV(c4)
    }

    mostrarVehiculos() {

        let id_particulares = document.getElementById("id-particulares")

        this.arregloVehiculos.forEach(vehiculos => {

            id_particulares.innerHTML += vehiculos.cardCV()
        });

        this.arregloVehiculos.forEach(vehiculos => {
            const gv = document.getElementById(`g-${vehiculos.idModal}`)

            gv.addEventListener("click", () => {
                controladorVG.agregarVG(vehiculos)
                controladorVG.guardarVStorage()
                controladorVG.mostrarVehiculosG()

                // =======toastify=======
                Toastify({
                    text: "Vehículo guardado con éxito",
                    duration: 3000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right,rgba(4, 97, 236, 0.123))",
                    },
                    onClick: function () { } // Callback after click
                }).showToast();

            })
        })
    }

}

class vehiculosGuardados {
    constructor() {
        this.arregloVG = []
    }

    agregarVG(vehiculoNuevo) {
        if (vehiculoNuevo instanceof vehiculos) {
            let fueGuardado = this.arregloVG.some(vehiculos => vehiculos.idModal == vehiculoNuevo.idModal)
            if (!fueGuardado) {
                this.arregloVG.push(vehiculoNuevo)
            }
        }
    }

    eliminarVG(vehiculoE) {
        let indiceVG = this.arregloVG.findIndex(vehiculoNuevo => vehiculoNuevo.idModal == vehiculoE.idModal)
        this.arregloVG.splice(indiceVG, 1)
    }

    agregarEVG() {
        this.arregloVG.forEach(vehiculos => {
            const btnE = document.getElementById(`evg${vehiculos.idModal}`)
            btnE.addEventListener("click", () => {
                this.eliminarVG(vehiculos)
                this.guardarVStorage()
                this.mostrarVehiculosG()
                // ====alerta sweetalert2=====
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Vehículo eliminado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })


            })
        })
    }

    guardarVStorage() {
        let arregloVGJson = JSON.stringify(this.arregloVG)
        localStorage.setItem("arregloVG", arregloVGJson)

    }

    recuperarStorageVG() {
        let arregloVGJson = localStorage.getItem("arregloVG")
        let listaArregloVG = JSON.parse(arregloVGJson)
        let arregloStorageVG = []
        listaArregloVG.forEach(vehiculo => {

            let nuevoV = new vehiculos(vehiculo.idModal, vehiculo.idCarouser, vehiculo.img1, vehiculo.img2, vehiculo.img3, vehiculo.img4, vehiculo.img5, vehiculo.precio, vehiculo.nombre, vehiculo.modelo, vehiculo.referencia);
            arregloStorageVG.push(nuevoV)
        });
        this.arregloVG = arregloStorageVG

    }

    mostrarVehiculosG() {
        let contenedorVG = document.getElementById("contenedorVG")
        contenedorVG.innerHTML = ""
        this.arregloVG.forEach(vehiculos => {
            contenedorVG.innerHTML += vehiculos.cardVG()
        })
        this.agregarEVG()

    }

}




// =================Instancias=======================
const controladorV = new controladorVehículos()
const controladorVG = new vehiculosGuardados()

// =================Ilamar a los metodos=======================
controladorVG.recuperarStorageVG()
controladorVG.mostrarVehiculosG()

controladorV.cargarVehiculos()
controladorV.mostrarVehiculos()