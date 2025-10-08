const d = document;
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

export const display = new Display();