import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = null;
  apellido = null;
  celular = null;
  email = null;
  id = null;
  usuarios = [];
 
  guardarDatos()
  {
    console.log(this.id)
    if(this.id != null)
    {
      this.usuarios[this.id]["nombre"] = this.nombre
      this.usuarios[this.id]["apellido"] = this.apellido
      this.usuarios[this.id]["celular"] = this.celular
      this.usuarios[this.id]["email"] = this.email
    }
    else{
    
      this.usuarios.push(
        {
          nombre: this.nombre,
          apellido: this.apellido,
          celular: this.celular,
          email: this.email,
        }
      ) 
    }
    this.nombre = ""
    this.apellido = ""
    this.celular = ""
    this.email = ""
    this.id = null
  
    console.log(this.usuarios)
  }

  editarDatos(item){

    this.nombre = item["nombre"]
    this.apellido = item["apellido"]
    this.celular = item["celular"]
    this.email = item["email"]

    this.id = this.usuarios.indexOf(item)
    this.usuarios[this.id]["nombre"] = this.nombre
    this.usuarios[this.id]["apellido"] = this.apellido
    this.usuarios[this.id]["celular"] = this.celular
    this.usuarios[this.id]["email"] = this.email
    
  }
  
  eliminarDatos(item){
    this.id = this.usuarios.indexOf(item)
    this.usuarios.splice(this.id,1)
  }
  
  constructor() {}
}
  