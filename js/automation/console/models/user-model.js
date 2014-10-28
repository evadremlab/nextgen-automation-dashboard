(function () {
  'use strict';

  angular
    .module('accela.automation')
    .factory('UserModel', service);

  /**
   * @description
   * Provides Angularized User data model for dependency injection.
   * Entities are defined in /js/core/entities
   *
   * @ngInject
   */
  function service(CONFIG, _) {

    // PRIVATE data

    var userSpaceFactory = Accela.Entity.UserSpace(CONFIG);

    // PUBLIC interface

    return {
      UserSpaceFactory: userSpaceFactory
    };
  }
})();
