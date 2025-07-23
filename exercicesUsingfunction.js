// EJERCICIO 1 ENTRADA A UN CINE

let entrada = true;
let edad = 13;

function entradaCine() {
    if (entrada == true && edad >= 13) {
        console.log("Puede entrar al cine");
    } else {
        console.log("no puede entrar");
    }
}
entradaCine();
 


// EJERCICIO 2 DESCUENTO ESPECIAL

let age = 60;
let discapacitado = true;

let aplicaDesc = age >=60 || discapacitado ? "Tiene un descuento especial" : "No tiene un descuento especial"

console.log(aplicaDesc)

// EJERCICIO 3 APROBACION DE ESTUDIANTES

let nota = 6;
let recuperacion = true;

let aprueba = nota >= 7 || recuperacion ? "Pasa la materia" : "No pasa la materia"

console.log(aprueba)