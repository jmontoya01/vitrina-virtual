// ===============modal inicio================

window.addEventListener("load", function () {
    const modal = document.getElementById("modalMain");
});

//================modal vehículos=============



class cardVehiculos {
    constructor(id, img, precio, nombre, modelo, referencia, empresa=null) {
        this.id = id
        this.img = img
        this.precio = precio
        this.nombre = nombre
        this.modelo = modelo
        this.referencia = referencia
        this.empresa = empresa

    }




}


class cardController {
    constructor() {
        this.arregloParticulares = []
        this.arregloCamiones = []
        this.arregloMotocicletas = []
        this.arregloTaxis = []
    }

    agregarParticulares(cardVehiculos) {
        this.arregloParticulares.push(cardVehiculos)
    }

    agregarCamiones(cardVehiculos) {
        this.arregloCamiones.push(cardVehiculos)
    }

    agregarMotocicletas(cardVehiculos) {
        this.arregloMotocicletas.push(cardVehiculos)
    }

    agregarTaxis(cardVehiculos) {
        this.arregloTaxis.push(cardVehiculos)
    }

    mostrarParticulares() {

        const id_particulares = document.getElementById("id-particulares")

        id_particulares.innerHTML = ""


        this.arregloParticulares.forEach(cardVehiculos => {

            const article = document.createElement("article")

            article.classList.add("tarjeta")

            article.innerHTML = `<div class="tarjeta__cuerpo">
            <a id="${cardVehiculos.id}"><img class="img" src="${cardVehiculos.img}" alt="automovil chevrolet"
                    loading="lazy"></a>
            <h2 class="precio">Precio $ ${cardVehiculos.precio}</h2>
            <hr>
            <p class="nombre">${cardVehiculos.nombre}</p>
            <p class="modelo">modelo | ${cardVehiculos.modelo}</p>
            <p class="referencia">${cardVehiculos.referencia}</p>
        </div>`

            id_particulares.appendChild(article)

        });

    }

    mostrarCamiones() {

        const id_camiones = document.getElementById("id-camiones")

        id_camiones.innerHTML = ""


        this.arregloCamiones.forEach(cardVehiculos => {

            const article = document.createElement("article")

            article.classList.add("tarjeta")

            article.innerHTML = `<div class="tarjeta__cuerpo">
            <a id="${cardVehiculos.id}"><img class="img" src="${cardVehiculos.img}" alt="automovil chevrolet"
                    loading="lazy"></a>
            <h2 class="precio">Precio $ ${cardVehiculos.precio}</h2>
            <hr>
            <p class="nombre">${cardVehiculos.nombre}</p>
            <p class="modelo">modelo | ${cardVehiculos.modelo}</p>
            <p class="referencia">${cardVehiculos.referencia}</p>
        </div>`

            id_camiones.appendChild(article)

        });

    }

    mostrarMotocicletas() {

        const id_motocicletas = document.getElementById("id-motocicletas")

        id_motocicletas.innerHTML = ""


        this.arregloMotocicletas.forEach(cardVehiculos => {

            const article = document.createElement("article")

            article.classList.add("tarjeta")

            article.innerHTML = `<div class="tarjeta__cuerpo">
            <a id="${cardVehiculos.id}"><img class="img" src="${cardVehiculos.img}" alt="automovil chevrolet"
                    loading="lazy"></a>
            <h2 class="precio">Precio $ ${cardVehiculos.precio}</h2>
            <hr>
            <p class="nombre">${cardVehiculos.nombre}</p>
            <p class="modelo">modelo | ${cardVehiculos.modelo}</p>
            <p class="referencia">${cardVehiculos.referencia}</p>
        </div>`

            id_motocicletas.appendChild(article)

        });

    }

    mostrarTaxis() {

        const id_taxis = document.getElementById("id-taxis")

        id_taxis.innerHTML = ""


        this.arregloTaxis.forEach(cardVehiculos => {

            const article = document.createElement("article")

            article.classList.add("tarjeta")

            article.innerHTML = `<div class="tarjeta__cuerpo">
            <a id="${cardVehiculos.id}"><img class="img" src="${cardVehiculos.img}" alt="automovil chevrolet"
                    loading="lazy"></a>
            <h2 class="precio">Precio $ ${cardVehiculos.precio}</h2>
            <hr>
            <p class="nombre">${cardVehiculos.nombre}</p>
            <p class="modelo">modelo | ${cardVehiculos.modelo}</p>
            <p class="referencia">${cardVehiculos.referencia}</p>
            <p class="empresa">${cardVehiculos.empresa}</p>

        </div>`

            id_taxis.appendChild(article)

        });

    }

    buscarVehiculo(id, precio, nombre, modelo, referencia) {
        return this.arregloParticulares.filter(cardVehiculos => cardVehiculos.id == id, cardVehiculos.precio == precio, cardVehiculos.nombre == nombre, cardVehiculos.modelo == modelo, cardVehiculos.referencia == referencia)
    }
}

const controladorC = new cardController()

// Crear instancias de particulares

const p1 = new cardVehiculos("modal1", "./img/chevrolet.jpg", "158.000.000", "Chevrolet Camaro SS", "2018", "25.000 kilometros | unico dueño")
const p2 = new cardVehiculos("modal2", "./img/mazda.jpg", "78.000.000", "Mazda 2", "2021", "15.000 kilometros | unico dueño")
const p3 = new cardVehiculos("modal3", "./img/renault.jpg", "148.000.000", "Renault Koleos", "2022", "12.000 kilometros | unico dueño")
const p4 = new cardVehiculos("modal4", "./img/toyota.jpg", "458.000.000", "Toyota LC200", "2021", "35.000 kilometros | unico dueño")

// Crear instancias de camiones

const c1 = new cardVehiculos("modal5", "./img/camiones.jpg", "155.000.000", "Chevrolet NHR", "2016", "148.000 kilometros")
const c2 = new cardVehiculos("modal6", "./img/camiones.jpg", "148.000.000", "Chevrolet NPR", "2015", "125.000 kilometros")
const c3 = new cardVehiculos("modal7", "./img/camiones.jpg", "208.000.000", "Chevrolet FRR", "2020", "150.000 kilometros")
const c4 = new cardVehiculos("modal8", "./img/camiones.jpg", "180.000.000", "Chevrolet NQR", "2022", "90.000 kilometros")

// Crear instancias de motocicletas

const m1 = new cardVehiculos("modal9", "./img/motobmw.jpg", "98.000.000", "BMW R1200 gs", "2020", "60.000 kilometros | unico dueño")
const m2 = new cardVehiculos("modal10", "./img/motocicletas.jpg", "58.000.000", "Yamaha R6", "2018", "40.000 kilometros | unico dueño")
const m3 = new cardVehiculos("modal11", "./img/motoktm.jpg", "97.000.000", "ktm Adventure 1180", "2020", "70.000 kilometros | unico dueño")
const m4 = new cardVehiculos("modal12", "./img/motomt.jpg", "79.000.000", "Yamaha MT09", "2021", "30.000 kilometros | unico dueño")

// Crear instancias de taxis

const t1 = new cardVehiculos("modal13", "./img/taxirines.jpg", "98.000.000", "Hyundai i10", "2020", "40.000 kilometros | Coopebombas")
const t2 = new cardVehiculos("modal14", "./img/taxikia.jpg", "87.000.000", "Kia Cerato", "2018", "80.000 kilometros", "Tax super")
const t3 = new cardVehiculos("modal15", "./img/taxirines.jpg", "105.000.000", "Kia Picanto", "2019", "96.000 kilometros", "Cootrasana")
const t4 = new cardVehiculos("modal16", "./img/taxipicanto.jpg", "98.000.000", "Kia Picanto Ion", "2021", "40.000 kilometros | unico dueño", "Tax individual")


// Agregar los vehículos a su arreglo correspondiente

controladorC.agregarParticulares(p1)
controladorC.agregarParticulares(p2)
controladorC.agregarParticulares(p3)
controladorC.agregarParticulares(p4)

controladorC.agregarCamiones(c1)
controladorC.agregarCamiones(c2)
controladorC.agregarCamiones(c3)
controladorC.agregarCamiones(c4)

controladorC.agregarMotocicletas(m1)
controladorC.agregarMotocicletas(m2)
controladorC.agregarMotocicletas(m3)
controladorC.agregarMotocicletas(m4)

controladorC.agregarTaxis(t1)
controladorC.agregarTaxis(t2)
controladorC.agregarTaxis(t3)
controladorC.agregarTaxis(t4)




window.addEventListener("load", function () {
    controladorC.mostrarParticulares()
    controladorC.mostrarCamiones()
    controladorC.mostrarMotocicletas()
    controladorC.mostrarTaxis()

});

