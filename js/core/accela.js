(function () {
  'use strict';

  angular
    .module('accela.core', [
      'ngResource',
      'smart-table',
      'ui.router',
//      'ui.bootstrap',
      'underscore'
    ])
    .constant('CONFIG', Accela.Config)
    .config(function ($httpProvider) {
      $httpProvider.interceptors.push('HttpInterceptor');
    })
    .provider('$exceptionHandler', {
      // By default, AngularJS will catch errors and log them to the console.
      // We want to keep that behavior; however, we want to intercept it
      // so we can also log the errors to the server for later analysis.
      $get: function(LoggingService) {
        return(LoggingService.exceptionHandler);
      }
    });
})();
