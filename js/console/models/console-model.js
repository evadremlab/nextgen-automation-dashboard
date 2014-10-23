(function () {
  'use strict';

  angular
    .module('accela.automation')
    .factory('ConsoleModel', service);

  /**
   * @description
   * Provides Angularized Console data model for dependency injection.
   * Entities are defined in /js/core/entities
   *
   * @ngInject
   */
  function service(CONFIG, _) {

    // PRIVATE data

    var portletFactory = Accela.Entity.Portlet(CONFIG);
    var pageFactory = Accela.Entity.ConsolePage(portletFactory, _);
    var consoleFactory = Accela.Entity.UserConsole(pageFactory, _);

    // PUBLIC interface

    return {
      UserConsole: consoleFactory,
      ConsolePage: pageFactory,
      Portlet: portletFactory
    };
  }
})();
