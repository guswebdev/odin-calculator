import { display } from "./display.js";

const d = document;
class Calculadora {
  numeroUno = "";
  numeroDos = "";
  operador = "";
  estado = true;
  resultado = "";

  //Tambien deberia trabajar con decimales

  get numeroUno() {
    return this.numeroUno;
  }
  get numeroDos() {
    return this.numeroDos;
  }
  get operador() {
    return this.operador;
  }
  set numeroUno(nuevoNumero) {
    this.numeroUno = nuevoNumero;
  }
  set numeroDos(nuevoNumero) {
    this.numeroDos = nuevoNumero;
  }
  set operador(nuevoOperador) {
    this.operador = nuevoOperador;
  }
  set estado(nuevoEstado) {
    this.estado = nuevoEstado;
  }

  get resultado() {
    return this.resultado;
  }
  set resultado(nuevoResultado) {
    this.resultado = nuevoResultado;
  }

  sumar(a, b) {
    return a + b;
  }
  restar(a, b) {
    return a - b;
  }
  multiplicar(a, b) {
    return a * b;
  }
  dividir(a, b) {
    return a / b;
  }

  calcular() {
    switch (this.operador) {
      case "+":
        return this.sumar(Number(this.numeroUno), Number(this.numeroDos));

      case "-":
        return this.restar(Number(this.numeroUno), Number(this.numeroDos));

      case "*":
        return this.multiplicar(Number(this.numeroUno), Number(this.numeroDos));

      case "/":
        return this.dividir(Number(this.numeroUno), Number(this.numeroDos));
    }
  }

  resetear() {
    this.numeroUno = "";
    this.numeroDos = "";
    this.resultado = "";
    this.operador = "";
    this.estado = true;
  }
  agregarDecimal() {
    if (this.estado) {
      this.numeroUno += ".";

      display.render(this.numeroUno);
    } else {
      this.numeroDos += ".";
      display.render(this.numeroDos);
    }
  }
}

export const calculadora = new Calculadora();
