(function() {
  'use strict';

  angular
    .module('accela.automation', [
      'accela.core'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {

      var consoleState = {
        'home' : {
          name: 'console',
          url: '/console',
          controllerAs: 'vm',
          controller: 'ConsoleController',
          templateUrl: 'views/console/index.html'
        },
        // in this nested view, omit the controller property
        // so that Angular will use the existing ConsoleController
        'customize': {
          name: 'console.customize',
          url: '/customize',
          templateUrl: 'views/console/customize.html'
        },
        'editPage': {
          name: 'console.editPage',
          url: '/edit',
          controllerAs: 'vmPage',
          controller: 'ConsolePageController',
          templateUrl: 'views/console/edit-page.html',
          params: { // required for $stateParams
            page: ''
          }
        }
      };

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/partials/dashboard.html'
        })
        .state(consoleState.home)
        .state(consoleState.customize)
        .state(consoleState.editPage);

      $urlRouterProvider.otherwise('/'); // default route if none of the above match
    });
})();
