/**
 * @author Wesley F Pereira
 * email: jimmmisss@gmail.com
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { UrlBackEnd } from '../../entity/UrlBackEnd';
import { CookieService } from 'angular2-cookie/core';

@IonicPage()
@Component({
  selector: 'page-add-filmes',
  templateUrl: 'add-filmes.html',
})

export class AddFilmesPage {

  public urlBackEnd: string;
  public addFilme: string;

  public filme = {
    nome: "", 
    ano: ""
  };

  constructor(

    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public http: Http,
    public loginService: LoginServiceProvider,
    public cookieService: CookieService

  ) {

      this.urlBackEnd = UrlBackEnd.Url();
      this.addFilme = UrlBackEnd.addFilme();

  }

  saveFilme(filme) {

    let headers =  new Headers();

        headers.append("Content-Type", "application/json;charset=utf-8");
        headers.append("Authorization", "Bearer " + this.cookieService.get("accessToken")) 


    let options = new RequestOptions({ headers: headers });

    this.http.post(this.urlBackEnd + this.addFilme, filme, options)
        .map(res => { res.json() })
        .subscribe(data => {

          let toast = this.toastCtrl.create({
            message: 'Adicionado com sucesso!',
            duration: 3000
          });
          toast.present();
          
        });        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFilmesPage');
  }

}