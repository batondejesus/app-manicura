import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.page.html',
  styleUrls: ['./register-screen.page.scss'],
})
export class RegisterScreenPage implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  signUp(email, password){
    if(email.value != '' && password.value != ''){
      this.authService.registerUser(email.value, password.value)
      .then((res) => {
        this.router.navigateByUrl('login');
        this.registerSuccesful();
      }).catch((error) => {
        this.errorFirebaseToast();
      });
    } else {
      this.fillCampsToast();
    }
  }

  // TOASTS DECLARATION
  async fillCampsToast() {
    const toast = await this.toastController.create({
      message: 'Por favor, rellena el formulario',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  async registerSuccesful() {
    const toast = await this.toastController.create({
      message: 'Registro completado!',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  async errorFirebaseToast() {
    const toast = await this.toastController.create({
      message: 'Ups, algo ha salido mal',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
