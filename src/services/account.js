import {inject} from 'aurelia-framework';
import {WebAPI} from './backend-http';

@inject(WebAPI)
export class Account {

  // Internal cache.
  cache = null;

  constructor(http) {
    this.http = http.http;
  }

  get() {
    var cache = this.getCache();
    if (!!cache) {
      return cache;
    }

    return this.http
      .get('api/v1.0/me')
      .then(response => {
        var data = JSON.parse(response.response).data[0];
        this.setCache(data);
        return data;
      });
  }

  setCache(data) {
    this.cache = data;
  }

  getCache() {
    return this.cache;
  }
}
