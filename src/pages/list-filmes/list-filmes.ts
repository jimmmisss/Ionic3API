/**
 * @author Wesley F Pereira
 * email: jimmmisss@gmail.com
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { InfoFilmesPage } from '../info-filmes/info-filmes';
import { UrlBackEnd } from '../../entity/UrlBackEnd';

@IonicPage()
@Component({
  selector: 'page-list-filmes',
  templateUrl: 'list-filmes.html',
})

export class ListFilmesPage {

  public filmes;
  public urlBackEnd: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {
    
    this.urlBackEnd = UrlBackEnd.Url();
    
    this.http.get(this.urlBackEnd + UrlBackEnd.listaFilmes())
      .map(res => res.json())
      .subscribe(data => {
          data = this.filmes = data['content'],
          console.log(data['content']);
      })     

  }

  getFilmesInfo(id) {
    this.navCtrl.push(InfoFilmesPage, {
      'filme_id': id,
      'url': UrlBackEnd.Url()
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListFilmesPage');
  }

}