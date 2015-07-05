import {inject} from 'aurelia-framework';
import {Account} from '../services/account';
import {Router} from 'aurelia-router';

@inject(Account, Router)
export class Homepage{
  heading = 'Skeleton';

  constructor(account, router) {
    this.router = router;
    this.account = account;
    if (!this.account.cache) {
      this.router.navigate('login');
    }
    else {
      console.log(this.account);
    }
  }
}
