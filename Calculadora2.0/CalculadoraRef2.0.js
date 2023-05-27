
    class view {
        constructor(){
          this.display = document.createElement('input');
          this.display.type = 'text';
          this.display.setAttribute('disabled', '');
          this.display.value = '';
          this.display.classList.add('displayResult');
      
          this.button7 = document.createElement('button');
          this.button7.innerText = '7';
          this.button7.classList.add('numberbutton');
          this.button7.classList.add('number');

          this.button8 = document.createElement('button');
          this.button8.innerText = '8';
          this.button8.classList.add('numberbutton');
          this.button8.classList.add('number');
      
          this.buttonMas = document.createElement('button');
          this.buttonMas.innerText = '+';
          this.buttonMas.classList.add('operatorbutton');
          

          this.button9 = document.createElement('button');
          this.button9.innerText = '9';
          this.button9.classList.add('numberbutton');
          this.button9.classList.add('number');
        
          this.button4 = document.createElement('button');
          this.button4.innerText = '4';
          this.button4.classList.add('numberbutton');
          this.button4.classList.add('number');
         
        
          this.button5 = document.createElement('button');
          this.button5.innerText = '5';
          this.button5.classList.add('numberbutton');
          this.button5.classList.add('number');
         
        
          this.button6 = document.createElement('button');
          this.button6.innerText = '6';
          this.button6.classList.add('numberbutton');
          this.button6.classList.add('number');
        
        
          this.buttonMinus = document.createElement('button');
          this.buttonMinus.innerText = '-';
          this.buttonMinus.classList.add('operatorbutton');
          
        
          this.button3 = document.createElement('button');
          this.button3.innerText = '3';
          this.button3.classList.add('numberbutton');
          this.button3.classList.add('number');
         
        
          this.button2 = document.createElement('button');
          this.button2.innerText = '2';
          this.button2.classList.add('numberbutton');
          this.button2.classList.add('number');
          
        
          this.button1 = document.createElement('button');
          this.button1.innerText = '1';
          this.button1.classList.add('numberbutton');
          this.button1.classList.add('number');
         
        
          this.buttonMulti = document.createElement('button');
          this.buttonMulti.innerText = '*';
          this.buttonMulti.classList.add('operatorbutton');
        
        
          this.button0 = document.createElement('button');
          this.button0.innerText = '0';
          this.button0.classList.add('numberbutton');
          this.button0.classList.add('number');
        
          this.buttonPunto = document.createElement('button');
          this.buttonPunto.innerText = '.';
          this.buttonPunto.classList.add('operatorbutton');
        
          this.buttonDiv = document.createElement('button');
          this.buttonDiv.innerText = '/';
          this.buttonDiv.classList.add('operatorbutton');
      
          this.buttonIgual = document.createElement('button');
          this.buttonIgual.innerText = '=';
          this.buttonIgual.classList.add('calculatebutton');
      
          this.buttonBorrar = document.createElement('button');
          this.buttonBorrar.innerText = 'Borrar';
          this.buttonBorrar.classList.add('operatorbutton');
          this.buttonBorrar.classList.add('borra');


          this.contenedor = document.createElement('div');
      

          this.contenedor.appendChild(this.display);

          this.contenedor.appendChild(this.button7);
          this.contenedor.appendChild(this.button8);
          this.contenedor.appendChild(this.button9);
          this.contenedor.appendChild(this.buttonMas);
          this.contenedor.appendChild(this.button4);
          this.contenedor.appendChild(this.button5);
          this.contenedor.appendChild(this.button6);
          this.contenedor.appendChild(this.buttonMinus);
          this.contenedor.appendChild(this.button3);
          this.contenedor.appendChild(this.button2);
          this.contenedor.appendChild(this.button1);
          this.contenedor.appendChild(this.buttonMulti);
          this.contenedor.appendChild(this.button0);
          this.contenedor.appendChild(this.buttonPunto);
          this.contenedor.appendChild(this.buttonIgual);
          this.contenedor.appendChild(this.buttonDiv);
          this.contenedor.appendChild(this.buttonBorrar);

          this.buttonPunto.classList.add('number');
          this.buttonMas.classList.add('operacion');
          this.buttonMinus.classList.add('operacion');
          this.buttonMulti.classList.add('operacion');
          this.buttonIgual.classList.add('igual');
          this.buttonDiv.classList.add('operacion');
          
          document.body.appendChild(this.contenedor);
      
          // Tabla
        
          this.table = document.createElement('table');
          this.row1 = document.createElement('div');
          this.row1 = document.createElement('tr');
          this.row2 = document.createElement('tr');
          this.row3 = document.createElement('tr');
          this.row4 = document.createElement('tr');
          this.row5 = document.createElement('tr');
        
      
          // Creo celdas y agregar botones a las celdas
          this.cell7 = document.createElement('td');
          this.cell7.appendChild(this.button7);
      
          this.cell8 = document.createElement('td');
          this.cell8.appendChild(this.button8);
          this.cell9 = document.createElement('td');
          this.cell9.appendChild(this.button9);
      
          this.cellmas = document.createElement('td');
          this.cellmas.appendChild(this.buttonMas);
          this.cell6 = document.createElement('td');
          this.cell6.appendChild(this.button6);
      
          this.cell5 = document.createElement('td');
          this.cell5.appendChild(this.button5);
      
          this.cell4 = document.createElement('td');
          this.cell4.appendChild(this.button4);
          this.cellminus = document.createElement('td');
          this.cellminus.appendChild(this.buttonMinus);
      
          this.cell3 = document.createElement('td');
          this.cell3.appendChild(this.button3);
      
          this.cell2 = document.createElement('td');
          this.cell2.appendChild(this.button2);
      
          this.cell1 = document.createElement('td');
          this.cell1.appendChild(this.button1);

          this.cellmulti = document.createElement('td');
          this.cellmulti.appendChild(this.buttonMulti);
      
          this.cell0 = document.createElement('td');
          this.cell0.appendChild(this.button0);
      
          this.cellpunto = document.createElement('td');
          this.cellpunto.appendChild(this.buttonPunto);

          this.celligual = document.createElement('td');
          this.celligual.appendChild(this.buttonIgual);

          this.celldiv = document.createElement('td');
          this.celldiv.appendChild(this.buttonDiv);
      
          this.cellborrar = document.createElement('td');
          this.cellborrar.appendChild(this.buttonBorrar);
      

          this.contenedor = document.createElement('div');
        
          this.contenedor.appendChild(this.display);
        
          
    // Agregar celdas a las filas

    this.row1.appendChild(this.cell7);
    this.row1.appendChild(this.cell8);
    this.row1.appendChild(this.cell9);
    this.row1.appendChild(this.cellmas);
  
    this.row2.appendChild(this.cell4);
    this.row2.appendChild(this.cell5);
    this.row2.appendChild(this.cell6);
    this.row2.appendChild(this.cellminus);
  
    this.row3.appendChild(this.cell3);
    this.row3.appendChild(this.cell2);
    this.row3.appendChild(this.cell1);
    this.row3.appendChild(this.cellmulti);
  
    this.row4.appendChild(this.cell0);
    this.row4.appendChild(this.cellpunto);
    this.row4.appendChild(this.celligual);
    this.row4.appendChild(this.celldiv);

    this.row5.appendChild(this.cellborrar);
      
      
          this.table.appendChild(this.row1);
          this.table.appendChild(this.row2);
          this.table.appendChild(this.row3);
    this.table.appendChild(this.row4);
    this.table.appendChild(this.row5);
    this.cellborrar.colSpan="4";
    
    
    document.body.appendChild(this.table);
    this.table = document.createElement('div');
    this.table.classList.add('table');
    
          this.contenedor.appendChild(this.table);
    document.body.appendChild(this.contenedor);
          
        

          
    }
    
  }
    
    //let calculatorView= new view();
    

    /*
            button7.classList.add('number');
            button8.classList.add('number');
            buttonIgual.classList.add('igual');
            buttonMas.classList.add('operator');
            buttonBorrar.classList.add('borra');
*/

class controller{
 
  
    constructor(viewReference,modelReference){
        this.innerView=viewReference;
        this.innerModel=modelReference;
        
        this.innerView.button7.addEventListener('click', () =>{this.onButton7Click()} );
        this.innerView.button8.addEventListener('click', () => {this.onButton8Click()});
        this.innerView.buttonMas.addEventListener('click', () => {this.onButtonMasClick()});
        this.innerView.button9.addEventListener('click', () => {this.onButton9Click()});
        
        this.innerView.button4.addEventListener('click',()=>{this.onButton4Click()} );
        this.innerView.button5.addEventListener('click',()=>{this.onButton5Click()} );
        this.innerView.button6.addEventListener('click', ()=>{this.onButton6Click()});
        this.innerView.buttonMinus.addEventListener('click', ()=>{this.onButtonMinusClick()} );
      
        this.innerView.button3.addEventListener('click', ()=>{this.onButton3Click()});
        this.innerView.button2.addEventListener('click',()=>{this.onButton2Click()} );
        this.innerView.button1.addEventListener('click', ()=>{this.onButton1Click()});
        this.innerView.buttonMulti.addEventListener('click', ()=>{this.onButtonMultiClick()});
      
        this.innerView.button0.addEventListener('click', ()=>{this.onButton0Click()});
        this.innerView.buttonPunto.addEventListener('click',()=>{this.onButtonPuntoClick()} );
        this.innerView.buttonDiv.addEventListener('click', ()=>{this.onButtonDivClick()});

        this.innerView.buttonIgual.addEventListener('click', () => {this.onButtonIgualClick()});
        this.innerView.buttonBorrar.addEventListener('click', () => {this.onButtonBorrarClick()});


    }
                    
    onButton7Click() {
      this.innerView.display.value+='7';
    
    }
  
    onButton8Click() {
      this.innerView.display.value += '8';
    }
      onButton9Click() {
        this.innerView.display.value += '9';
       
      }
    
    onButtonMasClick() {
        this.innerView.display.value += '+';
        
      }
    
      onButton4Click() {
        this.innerView.display.value += '4';
       
      }
    
      onButton5Click() {
        this.innerView.display.value += '5';
       
      }
    
      onButton6Click() {
        this.innerView.display.value += '6';
       
      }
    
      onButtonMinusClick() {
        this.innerView.display.value += '-';
       
  
      }
    
      onButton3Click() {
        this.innerView.display.value += '3';
        
      }
    
      onButton2Click() {
        this.innerView.display.value += '2';
       
      }
    
      onButton1Click() {
        this.innerView.display.value += '1';
        
      }
    
      onButtonMultiClick() {
        this.innerView.display.value += '*';
        
      }
    
      onButton0Click() {
        this.innerView.display.value += '0';
      
      }
    
      onButtonPuntoClick() {
        this.innerView.display.value += '.';
        
      }
    
                 //cuando click va al modelo y le dice que le calcule la expression 
                      //y le paso el parametro
    onButtonIgualClick() {
      const expression = this.innerView.display.value;
      const result = this.innerModel.evaluateExpression(expression);
      this.innerView.display.value = result;
  }
  
  onButtonDivClick() {
    this.display.value += '/';
  }

  
    onButtonBorrarClick() {
      this.innerView.display.value = " ";
    
      }
      

}

   

   /*  // Obtener el contenedor
     contenedor = document.getElementById('resultado');

     // Agregar elementos al contenedor
     contenedor.appendChild(display);
     contenedor.appendChild(table);*/

/*
    button7.addEventListener('click', onButton7Click);
    button8.addEventListener('click', onButton8Click);
    buttonMas.addEventListener('click', onButtonMasClick);
    buttonIgual.addEventListener('click', onButtonIgualClick);
    buttonBorrar.addEventListener('click', onButtonBorrarClick);*/




class model{
  constructor(){

  }
    evaluateExpression(expr){
              return eval(expr);
  }

}
 // main

class calculator{
    constructor(){
        this.view= new view();
        this.model=new model();
        this.controller=new controller(this.view, this.model);
        
      }
}

function application()
{
let myCalculator= new calculator();
document.body.appendChild(myCalculator.view.contenedor);

}

window.addEventListener('load', application);

