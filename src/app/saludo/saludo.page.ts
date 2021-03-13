import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage implements OnInit {


  saludar()
  {
    console.log(this.id)
    if(this.id != null)
    {
      this.usuarios[this.id]["nombre"] = this.nombre
      this.usuarios[this.id]["apellido"] = this.apellido
      this.usuarios[this.id]["celular"] = this.celular
      this.usuarios[this.id]["email"] = this.email
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
