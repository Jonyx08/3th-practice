// importar el modulo 
import readline from 'readline';

// crear la interfaz de la lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// relice the questio

rl.question("Ingrese una frase ", (frase)=>{
    console.log('\n === Tratamiento de las cadenas ===');

    //1.length
    const fraseLength = frase.length;
    console.log(`la longitud de la frase ${frase}, es de ${frase.length}`)

    //2.toUpperCase
    const fraseMayus = frase.toUpperCase();
    console.log(`La frase en mayusculas es: ${fraseMayus}`)

    //3.toLowerCase
    const fraseMinus = frase.toLowerCase();
    console.log(`La frase en minusculas es: ${fraseMinus}`)

    //4. trim
    const fraseTrim = frase.trim();
    console.log(`La frase sin espacios al inicio o al final es: ${fraseTrim}`);

    //5.substring
    const subCadena = frase.substring(1,4);
    console.log(`Los primeros 5 caracteres de la frase son: ${subCadena}`);

    //6.slice
    const subCadenaSlice = frase.slice(1,4);
    console.log(`Los primeros 5 caracteres de la frase son: ${subCadenaSlice}`);
    
    const subCadenaSlicemenos = frase.slice(-5);
    console.log(`Los primeros 5 caracteres de la frase son: ${subCadenaSlicemenos}`);

    //7. replace
    const fraseRemplazada = frase.replace(`hola`, `adios`);
    console.log(`La frase con 'hola' reemplazado por 'adios' es: ${fraseRemplazada} `)

    //8.replaceAll
    const fraseRemplazadaAll = frase.replaceAll('hola', 'adios');
    console.log(`La frase con todas las ocurrecncias de 'hola' emplazadas por 'adios': ${fraseRemplazadaAll}`)

    //9.split divide en palabras separandolas por un espacio
    const fraseArray = frase.split(' ');
    console.log(`la frase dividida en palabras es: ${fraseArray}`);

    //10. includes
    const incluyeHola = frase.includes('hola');
    console.log(`La frase incluye la palabra 'hola': ${incluyeHola}`)
    
    //11. indexOf
    const indiceHola = frase.indexOf('hola');
    console.log(`El indice de la primera ocurrencia de 'hola' es: ${indiceHola}`)
    
    //12. startsWith
    const empiezaConHola = frase.startsWith('hola');
    console.log(`La frase empieza con 'hola': ${empiezaConHola}`);

    //13.endsWith
    const terminaConAdios = frase.endsWith('adios');
    console.log(`La frase termina con 'adios': ${terminaConAdios}`);

    rl.close();
})