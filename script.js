//Variables
const d = document;

class Calculadora {
  numeroUno = "";
  numeroDos = "";
  operador = "";
  estado = true;

  //Voy a crear una variable resultado

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
    this.operador = "";
    this.estado = true;
  }
}

class Display {
  $display = d.querySelector("[data-display]");
  $btnsNumeros = [...d.querySelectorAll("[data-numero]")];
  $btnsOperadores = [...d.querySelectorAll("[data-operador]")];
  $btnBorrar = d.querySelector("[data-clear]");
  $btnBorrarParcial = d.querySelector("[data-aclear]");
  $btnDecimal = d.querySelector("[data-decimal]");
  $btnIgualdad = d.querySelector("[data-igualdad]");

  render(contenido) {
    this.$display.textContent = contenido;
  }

  limpiarDisplay() {
    this.$display.textContent = "";
  }
}

class Controlador {
  controlarNumeros(elemento) {
    if (calculadora.estado) {
      calculadora.numeroUno += elemento;
      display.render(calculadora.numeroUno);
    } else {
      calculadora.numeroDos += elemento;
      display.render(calculadora.numeroDos);
    }
    console.log(calculadora);
  }
  controlarOperadores(operador) {
    display.limpiarDisplay();
    calculadora.estado = false;
    if (calculadora.operador === "") {
      calculadora.operador = operador;
    } else {
      calculadora.numeroUno = calculadora.calcular();
      display.render(calculadora.numeroUno);
      calculadora.numeroDos = "";
      calculadora.operador = operador;
    }
  }

  controlarBorrar() {
    display.limpiarDisplay();
    calculadora.resetear();
    console.log(calculadora);
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
    console.log(`Resultado: ${calculadora.calcular()}`);
    if (
      calculadora.numeroUno != "" &&
      calculadora.numeroDos != "" &&
      calculadora.operador != ""
    ) {
      display.render(calculadora.calcular());
      calculadora.resetear();
    }
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
    }
  }
}

const calculadora = new Calculadora();
const display = new Display();
const controlador = new Controlador();

//Ejecucion
d.addEventListener("click", controlador.click);
