import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { UrlBackEnd } from '../../entity/UrlBackEnd';

@IonicPage()
@Component({
  selector: 'page-add-filmes',
  templateUrl: 'add-filmes.html',
})

export class AddFilmesPage {

  public urlBackEnd: string;

  public filme = {
    title: "", 
    body: ""
  };

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public http: Http
  ) {
      this.urlBackEnd = UrlBackEnd.Url();
  }

  saveFilme(filme) {

    let headers =  new Headers();
        headers.append('Content-Type', 'application/json');
    
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.urlBackEnd + '/v1/protected/filme', filme, options)
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