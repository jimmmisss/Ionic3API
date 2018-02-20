import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-info-filmes',
  templateUrl: 'info-filmes.html',
})
export class InfoFilmesPage {

  public info: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {

    let url = this.navParams.get('url');
    let id = this.navParams.get('filme_id');

    this.http.get(url + '/posts/' + id)
        .map(res => res.json())
        .subscribe(data => {
          this.info = data
          //console.log(data);
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoFilmesPage');
  }

}