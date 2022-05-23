import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  logIn(email, password) {
    if(email.value != '' && password.value != ''){
      this.authService.signIn(email.value, password.value)
        .then((res) => {
          this.router.navigateByUrl('');
          this.loginSuccesful();
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

  async loginSuccesful() {
    const toast = await this.toastController.create({
      message: 'Bienvenido/a',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  async errorFirebaseToast() {
    const toast = await this.toastController.create({
      message: 'Email/Contraseña incorrectos',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }



}
