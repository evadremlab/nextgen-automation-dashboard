(function () {
  'use strict';

  angular
    .module('accela.core')
    .factory('UserModel', service);

  /**
   * @description
   * Provides Angularized data model for dependency injection.
   * Entities are defined in /js/core/entities
   *
   * @ngInject
   */
  function service() {

    // PRIVATE data

    var userActivityFactory = Accela.Entity.UserActivity();
    var userProfileFactory = Accela.Entity.UserProfile();
    var userSpaceFactory = Accela.Entity.UserSpace();
    var workflowTaskFactory = Accela.Entity.UserWorkflowTask();

    // PUBLIC interface

    return {
      UserActivity: userActivityFactory,
      UserProfile: userProfileFactory,
      UserSpace: userSpaceFactory,
      UserWorkflowTask: workflowTaskFactory
    };
  }
})();
