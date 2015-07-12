export class CompanyDashboard {
  heading = 'Company Dashboard';

  configureRouter(config, router) {
    config.map([
      {
        // @todo: Change route to "events" only.
        route: ['', 'events'],
        name: 'events',
        moduleId: './dashboard/events',
        title:'Events'
      }
    ]);

    this.router = router;
  }
}
