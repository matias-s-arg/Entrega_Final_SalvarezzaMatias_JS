

//---------------------------------------------ENTREGA---------------------------


// 1-- nombres para presentación

const titulo = document.querySelector(`#titulo`)

let nombre = ''

// verificación de nombres previos
const nombreLS = localStorage.getItem("nombre")

if (nombreLS) {
    nombre = nombreLS
}  else{
    nombre = prompt("Ingrese su nombre")
    localStorage.setItem("nombre",nombre)
}

titulo.innerHTML = `Bienvenido ${nombre}`

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
        cliente: cliente,
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

// traigo cantidad de bebidas guardadas
 console.log(clientesIgresados.length)

 const ingresados = document.getElementById("ingresados")
 ingresados.innerHTML = `Ha ingresado ${clientesIgresados.length} personas` 


// 3----------------------- DEFINO LOS PRODUCTOS EN CARTA

// carga de carta de bebidas

let carta = []
const cartaLS = JSON.parse(localStorage.getItem('carta'))

if (cartaLS) {
    carta = cartaLS
}


const tipoBebida = document.getElementById("tipoBebida")
const precioBebida = document.getElementById("precioBebida")
const btnAgregar = document.getElementById("btnAgregar")

btnAgregar.addEventListener("click", () => {
    const bebida = tipoBebida.value
    const precio = precioBebida.value
    window.location.reload()

    if(bebida === '') return
    if(precio === '') return
   

    const cartaBebidas = {
        id: carta.length +1,
        bebida: bebida,
        precio: precio
    }
    carta.push(cartaBebidas)
    console.log(carta)              
    tipoBebida.value = ''
    precioBebida.value = ''
    localStorage.setItem('carta', JSON.stringify(carta))
})

//boton refresh

const refresh = document.getElementById("refresh")

refresh.addEventListener("click", () => {
    window.location.reload()
    
           
})



// 4----------------------------------------mostrar productos

// traigo como String
const bebidasCarta = localStorage.getItem("carta")
// paso a Objeto
const cartaJSON = JSON.parse(bebidasCarta)

console.log(bebidasCarta)
console.log(typeof bebidasCarta)
console.log(cartaJSON)
console.log(typeof cartaJSON)


const listaBebidas = document.getElementById("listaBebidas")

if (cartaJSON) {
    cartaJSON.forEach((user) => {
    console.log(user)

    const li = document.createElement("li")
    li.innerHTML = `
        <h4>id: ${user.id}</h4>
        <h4>bebida: ${user.bebida}</h4>
        <h4>precio: ${user.precio}</h4>
        `

    listaBebidas.append(li)
})
} else{
    listaBebidas.innerHTML = "No hay bebidas cargadas"
}


// visualizo la carta en pagina

// traigo como String
const bebidasContacto = localStorage.getItem("carta")

// paso a Objeto
const bebidasJSON = JSON.parse(bebidasContacto)

console.log(bebidasContacto)
console.log(typeof bebidasContacto)
console.log(bebidasJSON)
console.log(typeof bebidasJSON)
// genero constante a partir de valores JSON
const bebidasIngresadas = bebidasJSON

// traigo cantidad de bebidas guardadas




console.log(bebidasIngresadas.length)



// boton limpiar datos
const limpiar = document.getElementById("limpiar")

limpiar.addEventListener("click", () => {
    sessionStorage.clear()
    localStorage.clear()
    window.location.reload()
})

