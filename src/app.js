import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Skeleton';
    config.mapUnknownRoutes(instruction => {
      //check instruction.fragment
      //set instruction.config.moduleId
      instruction.config.moduleId = './403';

    });
    config.map([
      {
        route: ['', 'homepage', 'dashboard'],
        name: 'homepage',
        moduleId: '.dashboard/homepage',
        nav: false,
        title:'Homepage'
      },
      {
        route: ['403'],
        name: '403',
        moduleId: '.403',
        nav: false,
        title:'403'
      }
    ]);

    this.router = router;
  }
}
