function msj(){
    alert("funca o no");
}

function app() {
    let numpantalla = "0";
    let pantallaconnumero = "si"; // si o no
    let usarpunto = "no"; // saber si ya fue usado el botón punto
    let numespera = 0; // registrará el primer valor ingresado
    let operapendiente = ""; // operación con los 2 números ingresados
    let solucion = "";
  
    //manejar el evento de presionar un número en la calculadora.
    function ingresarnumero(x) {
      if (x !== ".") {
        if (numpantalla === "0" || pantallaconnumero === "si") {
          document.getElementsByName("txtboxnros")[0].value = x;
          numpantalla += x;
        } else if (x !== ".") {
          document.getElementsByName("txtboxnros")[0].value += x;
          numpantalla += x;
        }
      }
      if (x === "." && usarpunto === "no" && numpantalla === "0") {
        document.getElementsByName("txtboxnros")[0].value = "0.";
        numpantalla += x;
        usarpunto = "si";
      } else if (x === "." && usarpunto === "no") {
        document.getElementsByName("txtboxnros")[0].value += x;
        numpantalla += x;
        usarpunto = "si";
      } else if (x === "." && usarpunto === "si") {
        pantallaconnumero = "no";
      }
    }
  // manejar el evento de presionar un botón de operación
    function ingresaroperacion(y) {
      if (operapendiente === "") {
        numespera = document.getElementsByName("txtboxnros")[0].value;
        document.getElementsByName("txtboxnros")[0].value += y;
        operapendiente = y;
        pantallaconnumero = "no";
        numpantalla = "";
        usarpunto = "no";
      }
    }
  //calcular y mostrar el resultado de la operación
    function resultado() {
      if (operapendiente !== "") {
        solucion = numespera + operapendiente + numpantalla;
        document.getElementsByName("txtboxnros")[0].value = eval(solucion);
        numpantalla = eval(solucion);
        pantallaconnumero = "si";
        operapendiente = "";
        usarpunto = "no";
      }
    }
  //reiniciar todas las variables y mostrar "0" en el campo de texto
    function limpiar() {
      numpantalla = "0";
      pantallaconnumero = "si";
      usarpunto = "no";
      numespera = 0;
      operapendiente = "";
      solucion = "";
      document.getElementsByName("txtboxnros")[0].value = "0";
    }
  //obtener todos los botones numericos
    let numberButtons = document.getElementsByClassName("number");
    for (let i = 0; i < numberButtons.length; i++) {
      numberButtons[i].getElementsByTagName("input")[0].addEventListener("click", function() {
        ingresarnumero(this.value);
      });
    }
  //obtner todos los botones de operacion
    let operationButtons = document.getElementsByClassName("operacion");
    for (let i = 0; i < operationButtons.length; i++) {
      operationButtons[i].getElementsByTagName("input")[0].addEventListener("click", function() {
        ingresaroperacion(this.value);
      });
    }
  //grego un evento de clic al botón de igual =. Cuando se hace clic en el botón de igual, se ejecutará la función resultado
    document.getElementsByClassName("igual")[0].getElementsByTagName("input")[0].addEventListener("click", resultado);
  //agrego un evento de clic al botón de borrar
    document.getElementsByClassName("borra")[0].getElementsByTagName("input")[0].addEventListener("click", limpiar);
  
};

window.addEventListener('load', app, msj);
  