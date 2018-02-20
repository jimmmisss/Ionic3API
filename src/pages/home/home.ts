import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public loginForm;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuider: FormBuilder,
    public nav: NavController,
    private loginService: LoginServiceProvider
  ) {

    this.loginForm = formBuider.group({
        usuario: [''],
        senha: ['']
    });

  }

  loginApp(): void {
    
    if(this.loginForm.valid) {
      this.loginService.login(this.loginForm.value)
          .subscribe(
            response => console.log(response)
          )
    } else {
      this.loading.present();
    }

  }

}
