
  
  function app() {
 
    let display = document.createElement('input');
    display.type = 'text';
    display.setAttribute('disabled', '');
    display.value = '';
    display.classList.add('displayResult');
  
    let button7 = document.createElement('button');
    button7.innerText = '7';
    button7.classList.add('numberbutton');
    button7.addEventListener('click', onButton7Click);
  
    let button8 = document.createElement('button');
    button8.innerText = '8';
    button8.classList.add('numberbutton');
    //button8.addEventListener('click', onButton8Click);
  
    let button9 = document.createElement('button');
    button9.innerText = '9';
    button9.classList.add('numberbutton');
    //button9.addEventListener('click', onButton9Click);
  
    let buttonMas = document.createElement('button');
    buttonMas.innerText = '+';
    buttonMas.classList.add('operatorbutton');
    //buttonMas.addEventListener('click', onButtonMasClick);
  
    let button4 = document.createElement('button');
    button4.innerText = '4';
    button4.classList.add('numberbutton');
    //button4.addEventListener('click', onButton4Click);
  
    let button5 = document.createElement('button');
    button5.innerText = '5';
    button5.classList.add('numberbutton');
    //button5.addEventListener('click', onButton5Click);
  
    let button6 = document.createElement('button');
    button6.innerText = '6';
    button6.classList.add('numberbutton');
    //button6.addEventListener('click', onButton6Click);
  
    let buttonMinus = document.createElement('button');
    buttonMinus.innerText = '-';
    buttonMinus.classList.add('operatorbutton');
    //buttonMinus.addEventListener('click', onButtonMinusClick);
  
    let button3 = document.createElement('button');
    button3.innerText = '3';
    button3.classList.add('numberbutton');
    //button3.addEventListener('click', onButton3Click);
  
    let button2 = document.createElement('button');
    button2.innerText = '2';
    button2.classList.add('numberbutton');
    //button2.addEventListener('click', onButton2Click);
  
    let button1 = document.createElement('button');
    button1.innerText = '1';
    button1.classList.add('numberbutton');
    //button1.addEventListener('click', onButton1Click);
  
    let buttonMulti = document.createElement('button');
    buttonMulti.innerText = '*';
    buttonMulti.classList.add('operatorbutton');
    //buttonMulti.addEventListener('click', onButtonMultiClick);
  
    let button0 = document.createElement('button');
    button0.innerText = '0';
    button0.classList.add('numberbutton');
    //button0.addEventListener('click', onButton0Click);
  
    let buttonPunto = document.createElement('button');
    buttonPunto.innerText = '.';
    buttonPunto.classList.add('operatorbutton');
    //buttonPunto.addEventListener('click', onButtonPuntoClick);
  
    let buttonIgual = document.createElement('button');
    buttonIgual.innerText = '=';
    buttonIgual.classList.add('calculatebutton');
  //buttonIgual.addEventListener('click);
  
    let buttonDiv = document.createElement('button');
    buttonDiv.innerText = '/';
    buttonDiv.classList.add('operatorbutton');
    //buttonDiv.addEventListener('click', onButtonDivClick);
  
    let buttonBorrar = document.createElement('button');
    buttonBorrar.innerText = 'Borrar';
    buttonBorrar.classList.add('operatorbutton');
   // buttonBorrar.addEventListener('click', onButtonBorrarClick);
 

 
    function onButton7Click() {
      display.value += '7';
      button7.classList.add('number');
    }
  
    function onButton8Click() {
      display.value += '8';
      button8.classList.add('number');
    }
  
    function onButton9Click() {
      display.value += '9';
      button9.classList.add('number');
    }
  
    function onButtonMasClick() {
      display.value += '+';
    }
  
    function onButton4Click() {
      display.value += '4';
      button4.classList.add('number');
    }
  
    function onButton5Click() {
      display.value += '5';
      button5.classList.add('number');
    }
  
    function onButton6Click() {
      display.value += '6';
      button6.classList.add('number');
    }
  
    function onButtonMinusClick() {
      display.value += '-';

    }
  
    function onButton3Click() {
      display.value += '3';
      button3.classList.add('number');
    }
  
    function onButton2Click() {
      display.value += '2';
      button2.classList('number');
    }
  
    function onButton1Click() {
      display.value += '1';
      button1.classList.add('number');
    }
  
    function onButtonMultiClick() {
      display.value += '*';
    }
  
    function onButton0Click() {
      display.value += '0';
      button0.classList.add('number');
    }
  
    function onButtonPuntoClick() {
      display.value += '.';
      buttonPunto.classList.add('number');
    }
  
    function onButtonIgualClick() {
     display.value= eval(display.value);

     buttonIgual.classList.add('igual');
    }
    
  
    function onButtonDivClick() {
      display.value += '/';
    }
  
    function onButtonBorrarClick() {
      display.value = " ";

       buttonBorrar.classList.add('borra');
     
      }
    
  
    // Crear tabla y filas
    let table = document.createElement('table');
    let row1 = document.createElement('tr');
    let row2 = document.createElement('tr');
    let row3 = document.createElement('tr');
    let row4 = document.createElement('tr');
    let row5 = document.createElement('tr');
  
    // Creo celdas y agregar botones a las celdas
    let cell7 = document.createElement('td');
    cell7.appendChild(button7);
  
    let cell8 = document.createElement('td');
    cell8.appendChild(button8);
  
    let cell9 = document.createElement('td');
    cell9.appendChild(button9);
  
    let cellmas = document.createElement('td');
    cellmas.appendChild(buttonMas);
  
    let cell4 = document.createElement('td');
    cell4.appendChild(button4);
  
    let cell5 = document.createElement('td');
    cell5.appendChild(button5);
  
    let cell6 = document.createElement('td');
    cell6.appendChild(button6);
  
    let cellmin = document.createElement('td');
    cellmin.appendChild(buttonMinus);
  
    let cell3 = document.createElement('td');
    cell3.appendChild(button3);
  
    let cell2 = document.createElement('td');
    cell2.appendChild(button2);
  
    let cell1 = document.createElement('td');
    cell1.appendChild(button1);
  
    let cellmult = document.createElement('td');
    cellmult.appendChild(buttonMulti);
  
    let cell0 = document.createElement('td');
    cell0.appendChild(button0);
  
    let cellpunto = document.createElement('td');
    cellpunto.appendChild(buttonPunto);
  
    let celligual = document.createElement('td');
    celligual.appendChild(buttonIgual);
  
    let celldiv = document.createElement('td');
    celldiv.appendChild(buttonDiv);
  
    let cellborrar = document.createElement('td');
    cellborrar.appendChild(buttonBorrar);
  
    // Agregar celdas a las filas
    row1.appendChild(cell7);
    row1.appendChild(cell8);
    row1.appendChild(cell9);
    row1.appendChild(cellmas);
  
    row2.appendChild(cell4);
    row2.appendChild(cell5);
    row2.appendChild(cell6);
    row2.appendChild(cellmin);
  
    row3.appendChild(cell3);
    row3.appendChild(cell2);
    row3.appendChild(cell1);
    row3.appendChild(cellmult);
  
    row4.appendChild(cell0);
    row4.appendChild(cellpunto);
    row4.appendChild(celligual);
    row4.appendChild(celldiv);
  
    row5.appendChild(cellborrar);
  
    // Agregar filas a la tabla
    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);
    table.appendChild(row4);
    table.appendChild(row5);
  
    // Obtener el contenedor
    contenedor = document.getElementById('resultado');
    contenedor.appendChild(display);
contenedor.appendChild(table);
  
    // Agregar elementos al contenedor
    contenedor.appendChild(display);
    contenedor.appendChild(table);
  
    // Variables para almacenar la expresión matemática
  
    button7.addEventListener('click', onButton7Click);
    button8.addEventListener('click', onButton8Click);
    button9.addEventListener('click', onButton9Click);
    buttonMas.addEventListener('click', onButtonMasClick);
  
    button4.addEventListener('click', onButton4Click);
    button5.addEventListener('click', onButton5Click);
    button6.addEventListener('click', onButton6Click);
    buttonMinus.addEventListener('click', onButtonMinusClick);
  
    button3.addEventListener('click', onButton3Click);
    button2.addEventListener('click', onButton2Click);
    button1.addEventListener('click', onButton1Click);
    buttonMulti.addEventListener('click', onButtonMultiClick);
  
    button0.addEventListener('click', onButton0Click);
    buttonPunto.addEventListener('click', onButtonPuntoClick);
    buttonIgual.addEventListener('click', onButtonIgualClick);
    buttonDiv.addEventListener('click', onButtonDivClick);
  
    buttonBorrar.addEventListener('click', onButtonBorrarClick);
    

  }
  
  
    


  
  window.addEventListener('load', app);