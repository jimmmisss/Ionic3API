/**
 * @author Wesley F Pereira
 * email: jimmmisss@gmail.com
 */

import { Headers, Http, RequestOptions, HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { UrlBackEnd } from '../../entity/UrlBackEnd';
import { Usuario } from '../../entity/Usuario';

@Injectable()
export class LoginServiceProvider {

  private loginUrl: string;
  private userUrl: string;
  public handlerError: any;

  constructor(
    public http: Http,
    public httpClientModule: HttpClientModule
  ) {
    
    this.loginUrl = UrlBackEnd.Url() + UrlBackEnd.oauthUrl();
    this.userUrl = UrlBackEnd.Url() + UrlBackEnd.usuarioUrl();

  }
  //1pmh3399
  public login(usuario: Usuario): Observable<any> {

      this.loginUrl + usuario.usuario + "&password" + usuario.senha;

      let headers = new Headers(/**{"Authorization": "Basic " + btoa("mobile" + ':' + "123")}*/);
          headers.append("Content-Type", "application/json;charset=UTF-8");    
          headers.append("Authorization", "Basic " + btoa("mobile" + ':' + "123"));

      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.loginUrl + usuario.usuario + "&password=" + usuario.senha, {}, options)
        .map(res => res.json());

  }

  public getUsuarioAtual(token: any) {

      let headers = new Headers({ 'Authorization': "Bearer " + token });
      let options = new RequestOptions({ headers: headers });

      return this.http.get(this.userUrl, options)
                 .map(res => res.json());

  }

}