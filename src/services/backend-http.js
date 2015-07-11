import {inject, transient} from 'aurelia-framework';
import {Auth} from './auth';
import {Config} from '../config/config';
import {HttpClient} from 'aurelia-http-client';


// Make sure the service is not singleton, as each time we may change the
// withParams value, an we don't want it to persist.
@transient()
@inject(Auth, Config)
export class WebAPI {

  constructor(auth, config, eventAggregator) {
    this.auth = auth;
    this.config = config;

    this.http = new HttpClient();
    this.http
      .configure(x => {
        x.withBaseUrl(this.config.backendUrl);
        x.withHeader('access-token', this.auth.getAccessToken());
    });
  }
}
