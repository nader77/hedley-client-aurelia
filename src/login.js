import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Config} from '../config/config';
import {HttpClient} from 'aurelia-http-client';

@inject(Router, HttpClient, Config)
export class Login {

  // Default credentials.
  credentials = {
    username: 'demo',
    pass: '1234'
  }

  constructor(router, http, config) {
    this.router = router;
    this.http = http;
    this.config = config;
  }

  get canLogin() {
    return this.credentials.username && this.credentials.pass && !this.http.isRequesting;
  }

  login() {
    var credentials = this.credentials;
    // Convert to base64.
    var base64 = window.btoa(credentials.username + ':' + credentials.pass);

    return this.http
      .configure(x => {
        x.withBaseUrl(this.config.backendUrl);
        x.withHeader('Authorization', 'Basic ' + base64);
      })
      .get('api/login-token')
      .then(response => {
        // Add access token to the localStorage.
        var accessToken = JSON.parse(response.response).access_token;
        localStorage.setItem('access_token', accessToken);

        this.router.navigate('dashboard');
      });
  }

}
