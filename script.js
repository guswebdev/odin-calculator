//Variables
const d = document;

let numero = "";
let auxiliar = "";
let operador = "";

let contOperador = 0;
let resultado = "";

const $display = d.querySelector("[data-display]");

//Funciones
let sumar = (a, b) => a + b;
let restar = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => a / b;

let operate = (primerTermino, segundoTermino, operador) => {
  switch (operador) {
    case "+":
      return sumar(primerTermino, segundoTermino);

    case "-":
      return restar(primerTermino, segundoTermino);

    case "*":
      return multiplicar(primerTermino, segundoTermino);

    case "/":
      return dividir(primerTermino, segundoTermino);
  }
};

let displayNumero = (numero) => {
  $display.textContent += numero;
};
let displayResultado = (resultado) => {
  $display.textContent = resultado;
};

let limpiarDisplay = () => {
  $display.textContent = "";
};

let esNumero = (elemento) => {
  return elemento.hasAttribute("data-numero") ? true : false;
};
let esOperador = (elemento) => {
  return elemento.hasAttribute("data-operador") ? true : false;
};
let esIgualdad = (elemento) => {
  return elemento.hasAttribute("data-igualdad") ? true : false;
};
let esClear = (elemento) => {
  return elemento.hasAttribute("data-clear") ? true : false;
};

let esPosibleResolver = () => {
  return contOperador === 1 && numero != "" && auxiliar != "" && operador != ""
    ? true
    : false;
};

let guardarNumero = () => {
  auxiliar = numero;
  numero = "";
};

let resultadoParcial = (valor) => {
  resultado = operate(parseInt(auxiliar), parseInt(numero), operador);
  auxiliar = resultado;
  numero = "";
  operador = valor;
  contOperador = 1;
};
let resultadoFinal = () => {
  return operate(parseInt(auxiliar), parseInt(numero), operador);
};

let resetear = () => {
  numero = "";
  auxiliar = "";
  operador = "";
  contOperador = 0;

  resultado = "";
};
//Eventos
let click = (e) => {
  let $btn = e.target;
  let valor = e.target.textContent;

  if ($btn.classList.contains("btn")) {
    if (esNumero($btn)) {
      numero += valor;
      limpiarDisplay();
      displayNumero(numero);
    }
    if (esOperador($btn)) {
      if (numero != "") {
        if (contOperador === 0) {
          operador = valor;
          guardarNumero();
          limpiarDisplay();
          contOperador++;
        }
        if (esPosibleResolver()) {
          resultadoParcial(valor);
        }
      }
    }
    if (esIgualdad($btn)) {
      if (numero != "" && auxiliar != "" && operador != "") {
        displayResultado(resultadoFinal());
        resetear();
      }
    }
    if (esClear($btn)) {
      resetear();
      limpiarDisplay();
    }
  }
};

//Ejecucion
d.addEventListener("click", click);
