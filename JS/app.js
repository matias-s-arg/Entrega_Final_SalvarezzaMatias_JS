
// 1-- nombres para presentación

// demoro 2 segundos el inicio
setTimeout(() => {
    const titulo = document.querySelector(`#titulo`)

let nombre = ''

// verificación de nombres previos
const nombreLS = sessionStorage.getItem("nombre")

if (nombreLS) {
    nombre = nombreLS
}  else{
    
    nombre = prompt("Ingrese su nombre").toUpperCase()
    sessionStorage.setItem("nombre",nombre)
}

titulo.innerHTML = `Bienvenido ${nombre}`
}, 2000);

// 2----------------------- listado de personas

let listaP = []
const listaPSS = JSON.parse(sessionStorage.getItem('listaP'))

if (listaPSS) {
    listaP = listaPSS
}// ok

const nombreP = document.getElementById("nombreP")
const btnAgregar2 = document.getElementById("btnAgregar2")

btnAgregar2.addEventListener("click", () => {
    const cliente = nombreP.value
    window.location.reload()

    if(cliente === '') return
    
    const listadoPers = {
        idP: listaP.length +1,
        cliente: cliente.toUpperCase(),
    }
    listaP.push(listadoPers)
    console.log(listaP)              
    nombreP.value = ''

    sessionStorage.setItem('listaP', JSON.stringify(listaP))
})

    // traigo como String
    const clientesFinal = sessionStorage.getItem("listaP")

    // paso a Objeto
    const clientesJSON = JSON.parse(clientesFinal)

    console.log(clientesFinal)
    console.log(typeof clientesFinal)
    console.log(clientesJSON)
    console.log(typeof clientesJSON)

    // genero constante a partir de valores JSON
    const clientesIgresados = clientesJSON

    console.log(clientesIgresados.length)

    // traigo cantidad de prods guardadas
    console.log(clientesIgresados.length)

    const ingresados = document.getElementById("ingresados")
    ingresados.innerHTML = `Ha ingresado ${clientesIgresados.length} personas` 







// 3----------------------- DEFINO LOS PRODUCTOS EN CARTA

let carta = []
const cartaLS = JSON.parse(localStorage.getItem('carta'))

if (cartaLS) {
    carta = cartaLS
}

const tipoprod = document.getElementById("tipoprod")
const precioprod = document.getElementById("precioprod")
const btnAgregar = document.getElementById("btnAgregar")



btnAgregar.addEventListener("click", () => {
    let prod = tipoprod.value.toUpperCase()
    let precio = precioprod.value
    // let cantidad = 0
    // let consumido = precio * cantidad
    window.location.reload()

    if(prod === '') return
    if(precio === '') return
   
    const cartaprods = {
        id: carta.length +1,
        prod: prod,
        precio: precio,
    }
    carta.push(cartaprods)
    console.log(carta)              
    tipoprod.value = ''
    precioprod.value = ''
    localStorage.setItem('carta', JSON.stringify(carta))
})

//boton refresh

 const refresh = document.getElementById("refresh")

 refresh.addEventListener("click", () => {
    window.location.reload()
    
 })



// 4----------------------------------------mostrar productos

let carrito = [];

// traigo como String
const prodsCarta = localStorage.getItem("carta")
// paso a Objeto
const cartaJSON = JSON.parse(prodsCarta)

console.log(prodsCarta)
console.log(typeof prodsCarta)
console.log(cartaJSON)
console.log(typeof cartaJSON)

const listaprods = document.getElementById("listaprods")

if (cartaJSON) {
    cartaJSON.forEach((user) => {
    console.log(user)

    // imprimo los productos

    const li = document.createElement("li")
    li.innerHTML = `
        <div class="card" style="width: 200px;">
        <h5>Id: ${user.id}</h5>
        <h5>Producto: ${user.prod}</h5>
        <h5>Precio: $ ${user.precio}</h5>
        </div>
        `
    listaprods.append(li)

    let seleccionar = document.createElement("button");
    seleccionar.innerText = "Elegir"
    seleccionar.className = "btn btn-outline-primary"
    
    li.append(seleccionar)
    
    //agrego evento
    seleccionar.addEventListener("click", () => {

        carrito.push({
            id : user.id,
            prod : user.prod,
            precio : parseInt(user.precio),

        });
        console.log(carrito)
        const consumido = carrito.reduce((acum, prod) => acum + prod.precio, 0 );
        console.log(consumido)
      
        // genero el listado de elementos seleccionados
    
        const li2 = document.createElement("li")
        li2.innerHTML = `
            <h5>${user.prod}</h5>
            `
        
        listaprods.append(li2)

        // defino el consumo total
        const consumoTotal2 = document.getElementById("consumoTotal2")
        consumoTotal2.innerHTML = `Ha gastado $ ${consumido}`

        // calculo la propina
        const propina = document.getElementById("propina")
        let pagoPropina = consumido * 0.1
        console.log(pagoPropina)
        propina.innerHTML = `La propina es $ ${pagoPropina}`


        // sumo total + propina
        const pagoTotal = document.getElementById("pagoTotal")
        let pagoConPropina = consumido + pagoPropina
        console.log(pagoConPropina)
        pagoTotal.innerHTML = `El total a pagar es $ ${pagoConPropina}`

        // calculo el calculo de cada uno
        // traigo como String
        const clientesFinal = sessionStorage.getItem("listaP")

        // paso a Objeto
        const clientesJSON = JSON.parse(clientesFinal)

        console.log(clientesJSON)

        // genero constante a partir de valores JSON
        const clientesIgresados = clientesJSON

        // traigo cantidad de prods guardadas
        console.log(clientesIgresados.length)

        const cantPers = document.getElementById("cantPers")
        let totalPers = clientesIgresados.length
        console.log(totalPers)
        cantPers.innerHTML = `El total de personas son ${totalPers}`

        // pago sin propina
        const pagoSinPropina = document.getElementById("pagoSinPropina")
        let cadaUnoSinProp = consumido / totalPers
        pagoSinPropina.innerHTML = `Cada uno paga sin propina $ ${cadaUnoSinProp}`

        // paga cada uno
        const pagaCadaUno = document.getElementById("pagaCadaUno")
        let pagoIndividual = pagoConPropina / totalPers
        console.log(pagoIndividual)
        pagaCadaUno.innerHTML = `Cada uno paga con propina $ ${pagoIndividual}`
    
    })

})
} else{
    listaprods.innerHTML = "No hay productos cargados"
    swal("Tiene que ingresar productos para iniciar")
}

 // boton refresh personas
 const limpiarPers = document.getElementById("limpiarPers")

 limpiarPers.addEventListener("click", () => {
     sessionStorage.clear()
     window.location.reload()
 })

// boton limpiar datos
const limpiar = document.getElementById("limpiar")

limpiar.addEventListener("click", () => {
    sessionStorage.clear()
    localStorage.clear()
    window.location.reload()
})

