// JAVASCRIPT ANTIGUO

/* const readline = require('readline'); */
import readline from "readline";

// CREAMOS UNA INTERFAZ

function askName() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // HACER UNA QUESTION()

  rl.question("What's your name?", (name) => {
    console.log(`Hi, have a nice day ${name}`);
    rl.close();
  });
}

// Ejercicio 1

function askCity() {
  const city = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  city.question("In which city do you live?", (ct) => {
    console.log(`${ct} is a great place to live`);
    city.close;
  });
}

// Ejercicio 2

function askColor() {
  const color = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  color.question("What's your favorite color", (colors) => {
    console.log(`The color ${colors} is really cool dude`);
    color.close;
  });
}

//Ejercicio 3
function twoWords() {
  const words = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  words.question("give me the first word", (word1) => {
    console.log(`your first word is ${word1}`);
    words.question("give me your second word", (word2) => {
      console.log(`your second word is ${word2}`);
      console.log(word1 + word2);
      words.close();
    });
  });
}

twoWords();
