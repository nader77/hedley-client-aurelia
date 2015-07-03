import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {WebAPI} from './services/backend-http';

@inject(Router, WebAPI)
export class Login {

  // @todo: Remove default credentials.
  credentials = {
    username: 'demo',
    pass: '1234'
  }

  constructor(router, api) {
    this.router = router;
    this.api = api;
  }

  get canLogin() {
    return this.credentials.username && this.credentials.pass && !this.api.isRequesting;
  }

  login() {
    var credentials = this.credentials;
    // Convert to base64.
    var base64 = window.btoa(credentials.username + ':' + credentials.pass);

    return this.http
      .get('api/login-token')
      .then(response => {
        // Add access token to the localStorage.
        var accessToken = JSON.parse(response.response).access_token;
        localStorage.setItem('access_token', accessToken);

        this.router.navigate('dashboard');
      });
  }

}
