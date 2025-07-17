console.log("Hello World");
//Variables
const d = document;
let numUno;
let numDos;
let operador;
//Funciones
let sumar = (a, b) => a + b;
let restar = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => a / b;

let operate = (numUno, operador, numDos) => {
  switch (operador) {
    case "+":
      return sumar(numUno, numDos);

    case "-":
      return restar(numUno, numDos);

    case "*":
      return multiplicar(numUno, numDos);

    case "/":
      return dividir(numUno, numDos);
  }
};
//Ejecucion
console.log(operate(4, "+", 2));
console.log(operate(8, "-", 4));
console.log(operate(16, "*", 8));
console.log(operate(32, "/", 16));
