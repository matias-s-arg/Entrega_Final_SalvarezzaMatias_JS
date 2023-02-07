
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


// ----------------calculos finales

let consumido = 0
for (let i = 0; i < bebidasIngresadas.length; i++) {
    let cantBebida = prompt("ingrese consumo de "+bebidasIngresadas[i].bebida);
    consumido = cantBebida * bebidasIngresadas[i].precio + consumido;
    console.log(consumido)
    
}
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

// traigo cantidad de bebidas guardadas
console.log(clientesIgresados.length)

const cantPers = document.getElementById("cantPers")
let totalPers = clientesIgresados.length
console.log(totalPers)
cantPers.innerHTML = `el total de personas son ${totalPers}`

// paga cada uno
const pagaCadaUno = document.getElementById("pagaCadaUno")
let pagoIndividual = pagoConPropina / totalPers
console.log(pagoIndividual)
pagaCadaUno.innerHTML = `cada uno tiene que pagar $ ${pagoIndividual}`



// boton fin
const botonFin = document.getElementById("botonFin")
botonFin.addEventListener("click", () => {
    sessionStorage.clear()
    window.location.reload()
              
})