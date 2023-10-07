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

    cardInfo() {
        return `
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner ">
                <div class="carousel-item active">
                    <img src="${this.img1}" alt="">
                </div>
                <div class="carousel-item">
                    <img src="${this.img2}" alt="">
                </div>
                <div class="carousel-item">
                    <img src="${this.img3}" alt="">
                </div>
                <div class="carousel-item">                                                                                                 
                    <img src="${this.img4}" alt="">
                </div>
                <div class="carousel-item">
                    <img src="${this.img5}" alt="">
                </div>
        </div>
        <a class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
            <span class="visually-hidden">atras</span>
        </a>
        <a class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden ">adelante</span>
        </a>
        </div>

            <hr>
            <h2>$${this.precio}</h2>
            <hr>
            <h3>${this.nombre}</h3>
            <hr>
            <p>${this.modelo}</p>
            <hr>
            <p>${this.referencia}</p>
            `                        
}

    cardCV() {
        return `
        <article class="tarjeta">
            <div class="tarjeta__cuerpo">
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
                <h2 class="precio">Precio $ ${this.precio}</h2>
                <hr>
                <p class="nombre">${this.nombre}</p>
                <p class="modelo">modelo | ${this.modelo}</p>
                <p class="referencia">${this.referencia}</p>
                <button class="vehiculos__btn" id="g-${this.idModal}">Guardar</button>
                <!-- Button modal información -->
                <button id="mi-${this.idModal}" type="button" class=" vehiculos__btn btn" data-bs-toggle="modal" data-bs-target="#ModalInfo">
                    Más información
                </button>
                
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
                    <hr>
                    <h6 class="card-text">precio$ ${this.precio}</h6>
                    <hr>
                    <h6 class="card-text">modelo: ${this.modelo}</h6>
                    <hr>
                    <h6 class="card-text">${this.referencia}</h6>
                    <hr>
                    <button class="btn btn-danger" id="evg${this.idModal}">Eliminar</button>
                    <button id="mi-${this.idModal}" type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ModalInfo">
                    Más información
                </button>
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
    // ========consumir simularAPI==================
    async contenedorVehiculos() {
        let listaVJSON = await fetch("vehiculosAPI.json")
        let listaVJS = await listaVJSON.json()

        listaVJS.forEach(vehiculo => {

            let nuevoVe = new vehiculos(vehiculo.idModal, vehiculo.idCarouser, vehiculo.img1, vehiculo.img2, vehiculo.img3, vehiculo.img4, vehiculo.img5, vehiculo.precio, vehiculo.nombre, vehiculo.modelo, vehiculo.referencia);
            this.agregarV(nuevoVe)
        })

        this.mostrarVehiculos()

    }

    // cargarVehiculos() {
    //     // ==========Crear instancias de particulares==============

    //     const p1 = new vehiculos("modal1", "carousel1", "./img/chevrolet.jpg", "./img/chevroletatras.jpg", "./img/chevroletfrente.jpg", "./img/chevroletinterior.jpg", "./img/chevroletmotor.jpg", "158.000.000", "Chevrolet Camaro SS", "2018", "25.000 kilometros | unico dueño")
    //     const p2 = new vehiculos("modal2", "carousel2", "./img/mazda.jpg", "./img/mazdaatras.jpg", "./img/mazdafrente.jpg", "./img/mazdainterior.jpg", "./img/mazdamotor.jpg", "78.000.000", "Mazda 2", "2021", "15.000 kilometros | unico dueño")
    //     const p3 = new vehiculos("modal3", "carousel3", "./img/renault.jpg", "./img/renaultatras.jpg", "./img/renaultfrente.jpg", "./img/renaultinterior.jpg", "./img/renaultmotor.jpg", "148.000.000", "Renault Koleos", "2022", "12.000 kilometros | unico dueño")
    //     const p4 = new vehiculos("modal4", "carousel4", "./img/toyota.jpg", "./img/toyota2.jpg", "./img/toyota3.jpg", "./img/toyota4.jpg", "./img/toyota.jpg", "458.000.000", "Toyota LC200", "2021", "35.000 kilometros | unico dueño")

    //     // ==============Crear instancias de camiones================

    //     const c1 = new vehiculos("modal5", "carousel5", "./img/camiones.jpg", "./img/camionfrente.jpg", "./img/camionatras.jpg", "./img/camioninterior.jpg", "./img/camionmotor.jpg", "155.000.000", "Chevrolet NHR", "2016", "148.000 kilometros")
    //     const c2 = new vehiculos("modal6", "carousel6", "./img/camiones.jpg", "./img/camionfrente.jpg", "./img/camionatras.jpg", "./img/camioninterior.jpg", "./img/camionmotor.jpg", "175.000.000", "Chevrolet FRR", "2018", "158.000 kilometros")
    //     const c3 = new vehiculos("modal7", "carousel7", "./img/camiones.jpg", "./img/camionfrente.jpg", "./img/camionatras.jpg", "./img/camioninterior.jpg", "./img/camionmotor.jpg", "145.000.000", "Chevrolet NQR", "2015", "168.000 kilometros")
    //     const c4 = new vehiculos("modal8", "carousel8", "./img/camiones.jpg", "./img/camionfrente.jpg", "./img/camionatras.jpg", "./img/camioninterior.jpg", "./img/camionmotor.jpg", "165.000.000", "Chevrolet NPR", "2017", "138.000 kilometros")

    //     // ===========Agregar los vehículos a su arreglo controladorVehiculos================

    //     controladorV.agregarV(p1)
    //     controladorV.agregarV(p2)
    //     controladorV.agregarV(p3)
    //     controladorV.agregarV(p4)
    //     controladorV.agregarV(c1)
    //     controladorV.agregarV(c2)
    //     controladorV.agregarV(c3)
    //     controladorV.agregarV(c4)
    //


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
                    text: `¡${vehiculos.nombre} añadido a vehículos guardados!`,
                    avatar : `${vehiculos.img1}`,
                    duration: 2000,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                }).showToast();

            })
        })
        controladorV.mostrarInfo()
        controladorV.botonWpp()
    }

    mostrarInfo() {

        this.arregloVehiculos.forEach(vehiculos => {
            let btnInfo = document.getElementById(`mi-${vehiculos.idModal}`)
            btnInfo.addEventListener("click", () => {
                let infoModal = document.getElementById("modalBodyInfo")
                infoModal.innerHTML = vehiculos.cardInfo()
                })
                
            })
        }

        botonWpp(){
            const btnWpp = document.getElementById("btnWpp")
            const numeroWpp = 573015980389
            const urlWpp = `https://api.whatsapp.com/send?phone=${numeroWpp}&text=¿Hola,%20me%20puede%20regalar%20más%20información%20del%20vehículo%20?`
            btnWpp.addEventListener("click", () => {
                window.location.href = urlWpp
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
        controladorV.mostrarInfo()
    }

    mostrarInfoVG(){
        this.arregloVG.forEach(vehiculos => {
            let btnInfo = document.getElementById(`mi-${vehiculos.idModal}`)
            btnInfo.addEventListener("click", () => {
                let infoModal = document.getElementById("modalBodyInfo")
                infoModal.innerHTML = vehiculos.cardInfo()
                })
                
            })
    }

}




// =================Instancias=======================
const controladorV = new controladorVehículos()
const controladorVG = new vehiculosGuardados()

// =================Llamar a los metodos del controlador de vehiculos=======================

controladorV.contenedorVehiculos()
controladorV.mostrarVehiculos()

// =================Llamar a los metodos de los vehiculos guardados=======================

controladorVG.recuperarStorageVG()
controladorVG.mostrarVehiculosG()
controladorVG.mostrarInfoVG()