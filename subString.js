//Un sistema de gestion de pedidos recibe codigos de seguimiento en el formato: PED-2025-00045, se necesita extraer el año del pedido y el numero de orden usando el metodo substring().

//requisitos
//1. Extraer el año del pedido (2025) y el numero de orden (00045) usando substring().

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese el codigo del pedido( ej: PED-2025-00045):", (codigo)=>{
    const año = codigo.trim().substring(4, 8);
    const numeroOrden = codigo.substring(9).trim();

    console.log(`Año del pedido es: ${año}`)
    console.log(`Numero de orden: ${numeroOrden}`)

    rl.close()
})