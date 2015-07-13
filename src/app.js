import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

import {AuthorizeStep} from './pipeline/authorize-step';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';

    // Add a route filter to the authorize extensibility point.
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      {
        route: ['', 'homepage', 'dashboard'],
        name: 'homepage',
        moduleId: './dashboard/homepage',
        nav: false,
        title:'Homepage'
      },
      {
        route: 'my-account',
        name: 'my-account',
        moduleId: './my-account',
        nav: true,
        title: 'My Account'
      },
      {
        route: 'login',
        name: 'login',
        moduleId: './login',
        nav: true,
        title: 'Login'
      },
      {
        route: 'logout',
        name: 'logout',
        moduleId: './logout',
        nav: true,
        title: 'Logout'
      },
      {
        route: 'my-account',
        name: 'my-account',
        moduleId: './my-account',
        nav: true,
        title: 'My Account'
      },
      {
        route: 'companies',
        name: 'companies',
        moduleId: './companies',
        nav: true,
        title: 'Companies'
      },
      {
        route: 'dashboard/:companyId',
        name: 'dashboard',
        moduleId: './dashboard',
      },
      {
        route: 'child-router',
        name: 'child-router',
        moduleId: './child-router',
        nav: true,
        title:'Child Router'
      }
    ]);

    this.router = router;
  }
}
