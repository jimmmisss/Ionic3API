/**
 * @author Wesley F Pereira
 * email: jimmmisss@gmail.com
 */

import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { RequestOptions, HttpModule, Http } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { CookieService } from 'angular2-cookie/core';
import { ListFilmesPage } from '../list-filmes/list-filmes';

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
    public requestOptions: RequestOptions,
    public formBuider: FormBuilder,
    public nav: NavController,
    private loginService: LoginServiceProvider,
    private cookieService: CookieService,
    public httpClientModule: HttpClientModule
  ) {

    this.loginForm = formBuider.group({
        usuario: [''],
        senha: ['']
    });

  }

  loginApp(): void {

    if(this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
            res => this.loginSuccess(res)
          )
    } else {
      this.loading.present();
    }

  }

  public loginSuccess(res: any) {

    this.cookieService.removeAll();
    this.cookieService.put("accessToken", res.access_token);
    this.requestOptions.headers.set('Authorization', "Bearer " + res.access_token);
    this.loginService.getUsuarioAtual(res.access_token).subscribe(
      res => this.redirectPage(res)
    );

  }

  public redirectPage(res: any) {

      this.cookieService.putObject("usuarioAtual", res);
      this.navCtrl.setRoot(ListFilmesPage);

  }

  redirectUser(response) {

      this.cookieService.removeAll();
      this.cookieService.put("access_token", response.access_token);
      this.requestOptions.headers.set('Authorization', "Bearer " + response.access_token);

  }

}