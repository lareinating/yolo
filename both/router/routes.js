Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/analyzeInsta', {
  name: 'analyzeInsta',
});

Router.route('/yoloChoice', {
  name: 'yoloChoice',
});
Router.route('/animationPage', {
  name: 'animationPage',
});

Router.route('/comfirmation', {
  name: 'comfirmation',
});
Router.route('/finalAcceptance', {
  name: 'finalAcceptance',
});

Router.route('/finalAcceptanceCharge', {
  name: 'finalAcceptanceCharge',
});
Router.route('/prizePage', {
  name: 'prizePage',
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
