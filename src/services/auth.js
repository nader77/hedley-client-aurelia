import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Router} from 'aurelia-router';

@inject(EventAggregator, Router)
export class Auth {

  constructor(eventAggregator, router) {
    this.eventAggregator = eventAggregator;
    this.router = router;
  }

  subscribe() {
    this.eventAggregator.subscribe('user_login', payload => {
      this.router.navigate('welcome');
    });
  }
}
