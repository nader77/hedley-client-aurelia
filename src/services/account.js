import {inject} from 'aurelia-framework';
import {WebAPI} from './backend-http';

@inject(WebAPI)
export class Account {

  // Internal cache.
  cache = null;

  constructor(http) {
    this.http = http;
  }

  get() {
    var cache = this.getCache();
    if (!!cache) {
      return cache;
    }

    return this.http
      .get('api/v1.0/me')
      .then(response => {
        this.setCache(response.data);
        return response.data;
      });
  }

  setCache(data) {
    this.cache = data;
  }

  getCache() {
    return this.cache;
  }
}
