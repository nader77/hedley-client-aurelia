import {inject} from 'aurelia-framework';
import {Account} from './services/account';

@inject(Account)
export class MyAccount {

  account = {};

  constructor(account) {
    this.account = account;
  }

  activate() {
    this.account
      .get()
      .then(response => {
        this.account = response;
      });
  }
}
