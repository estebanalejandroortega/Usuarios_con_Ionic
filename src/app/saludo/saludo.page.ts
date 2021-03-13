import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'
@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage{

  nombre = "";
  constructor(public alertController: AlertController) {}
  async saludar() {
    if(this.nombre == ""){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Saludo',
        message: 'Por favor ingrese un nombre para saludar ',
        buttons: ['Ok']
      });
      
      await alert.present();
    }
    else
    {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Saludo',
      message: 'Bienvenido '+this.nombre,
      buttons: ['Ok']
    });
    await alert.present();
    this.nombre = "";
  }
}
}
