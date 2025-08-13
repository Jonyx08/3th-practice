import readline from 'readline'

function formulary()  {
    const formularioWeb = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

formularioWeb.question('Ingresa tu nombre completo ', (name)=>{
    const nameNoSpace = name.trim().replaceAll(" ", "");
    console.log(`Nombre sin espacios ${nameNoSpace}`)
    const nameCharacters = name.trim().replaceAll(" ", "").length;
    console.log(`cantidad de caracteres dentro de el nombre: ${nameCharacters}`)

    formularioWeb.close()
})
}

function UserRegister(){
    const saveMails = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

saveMails.question('ingrsa tu gmail para ser verificado', (gmail)=>{
    const mailLower = gmail.toLowerCase()
    console.log(`Tu email a minusculas es: ${mailLower}`)
    if (gmail.includes('@gmail.com')) {
        console.log("Tu gmail ha sido verificado puedes ingresar")
    } else {
        console.log("tu email no pasa")
    }
    saveMails.close();
})
}

function code(){
    const generateCode = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

generateCode.question('Presiona enter para generar un código aleatorio: ', () => {
    const randomCode = Math.floor(Math.random() * 1000000); // Código de 6 dígitos
    console.log(`Tu código generado es: ${randomCode}`);
    const codeLast4 = String(randomCode).slice(-4);
    console.log(`Los ultimos cuatro digitos de tu codigo son: ${codeLast4}`)
    generateCode.close();
});
}

function errorMs(){
    const FindError = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

FindError.question('write your ms : ', (message)=>{
    const findingError = message.indexOf('error')
    console.log(`el indice de el error esta apartir de: ${findingError}`)
    FindError.close()
})

}

errorMs();