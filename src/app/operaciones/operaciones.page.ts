import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage {

  num1 = null;
  num2 = null;
  operacion = null;
  rta = null;
  strOp = null;
  
  
  calcular(){
    let numero1 = parseInt(this.num1)
    let numero2 = parseInt(this.num2)
    
    switch(this.operacion)
    {
      case '+':
        this.strOp = 'suma'
        this.rta = numero1 + numero2
      break;

      case '-':
        this.strOp = 'resta'
        this.rta = numero1 - numero2
      break;

      case '*':
        this.strOp = 'multiplicación'
        this.rta = numero1 * numero2
      break;

      case '/':
        this.strOp = 'división'
        this.rta = numero1 / numero2
      break;
    }
  } 
  constructor() { }

  ngOnInit() {
  }
}
