import { calculadora } from "./calculadora.js";
import { display } from "./display.js";

const d = document;
class Controlador {
  controlarNumeros(elemento) {
    if (calculadora.estado) {
      calculadora.numeroUno += elemento;
      display.render(calculadora.numeroUno);
    } else {
      calculadora.numeroDos += elemento;
      display.render(calculadora.numeroDos);
    }
  }
  controlarOperadores(operador) {
    display.limpiarDisplay();
    calculadora.estado = false;
    if (calculadora.operador === "") {
      calculadora.operador = operador;
    } else {
      calculadora.resultado = calculadora.calcular();
      calculadora.numeroUno = calculadora.calcular();
      display.render(calculadora.numeroUno);
      calculadora.numeroDos = "";
      calculadora.operador = operador;
    }
  }

  controlarBorrar() {
    display.limpiarDisplay();
    calculadora.resetear();
    display.$btnDecimal.disabled = false;
  }

  eliminarUltimoCaracter(numero) {
    if (numero != "") {
      numero = numero.slice(0, -1);
    }
  }

  controlarBorrarParcial() {
    if (calculadora.estado) {
      //trabajo numero uno
      if (calculadora.numeroUno != "") {
        calculadora.numeroUno = calculadora.numeroUno.slice(0, -1);
      }
      display.render(calculadora.numeroUno);
    } else {
      //trabajo numero dos
      if (calculadora.numeroDos != "") {
        calculadora.numeroDos = calculadora.numeroDos.slice(0, -1);
      }
      display.render(calculadora.numeroDos);
    }
  }
  controlarIgualdad() {
    if (
      calculadora.numeroUno != "" &&
      calculadora.numeroDos != "" &&
      calculadora.operador != ""
    ) {
      calculadora.resultado = calculadora.calcular();
      if (!Number.isInteger(calculadora.resultado)) {
        display.render(Number(calculadora.resultado).toFixed(2));
      } else {
        display.render(calculadora.resultado);
      }
      calculadora.resetear();
      display.$btnDecimal.disabled = false;
    }
  }
  controlarDecimal() {
    calculadora.agregarDecimal();
    display.$btnDecimal.disabled = true;
  }

  click(e) {
    if (e.target.classList.contains("btn")) {
      if (display.$btnsNumeros.includes(e.target)) {
        controlador.controlarNumeros(e.target.textContent);
      }
      if (display.$btnsOperadores.includes(e.target)) {
        //me falta controlar que presiones 2 veces el operador
        if (calculadora.numeroUno != "") {
          controlador.controlarOperadores(e.target.textContent);
        }
      }
      if (display.$btnIgualdad === e.target) {
        controlador.controlarIgualdad();
      }
      if (display.$btnBorrar === e.target) {
        controlador.controlarBorrar();
      }
      if (display.$btnBorrarParcial === e.target) {
        controlador.controlarBorrarParcial();
      }
      if (display.$btnDecimal === e.target) {
        controlador.controlarDecimal();
      }
      console.log(calculadora);
    }
  }
}

export const controlador = new Controlador();
//Ejecucion
document.addEventListener("click", controlador.click);
