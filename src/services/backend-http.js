import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Config} from '../config/config';

@inject(Config)
export class WebAPI {

  constructor(config){
    this.http = new HttpClient();

    this.http
      .configure(x => {
        x.withBaseUrl(config.backendUrl);
        x.withHeader('access-token', localStorage.getItem('access_token'));
    });
  }
}
