(function () {
  'use strict';

  // SEE: https://github.com/idanush/ngdocs/wiki/API-Docs-Syntax

  angular
    .module('accela.automation')
    .factory('DashboardManager', service);

  /**
   * @ngInject
   **/
  function service($log, $q, CONFIG, DashboardModel, DataService, _) {

    // PRIVATE data

    var model = DashboardModel;
    var config = CONFIG.DASHBOARD;

    // PUBLIC interface

    return {
      getActivityList: getActivityList,
      getUserProfile: getUserProfile,
      getUserSpaces: getUserSpaces,
      getUserClosedSpaces: getUserClosedSpaces,
      getWorkflowTasks: getWorkflowTasks
    };

    // PRIVATE methods

    function activate() {
      $log = $log.getInstance('DASHBOARD-MANAGER');
    }

    function getActivityList() {
      var data = {};
      var params = {};
      var deferred = $q.defer();

      DataService.get(config.SERVICES.GET_ACTIVITY_LIST, data, params)
        .then(function(response) {
          var list = [];
          var status = response.data.status;
          var content = response.data.content;

          if (status.code === 'OK') {
            _.each(content, function(data) {
              list.push(model.UserActivity.build(data));
            });

            deferred.resolve(list);
          } else {
            deferred.reject(status.message);
          }
        }, function(error) { // already reported by HttpInterceptor
          deferred.reject(error.customErrorMessage);
        });

      return deferred.promise;
    }

    function getUserProfile() {
      var data = {};
      var params = {};
      var deferred = $q.defer();

      DataService.get(config.SERVICES.GET_USER_PROFILE, data, params)
        .then(function(response) {
          var userProfile = {};
          var status = response.data.status;
          var content = response.data.content;

          if (status.code === 'OK') {
            userProfile = model.UserProfile.build(content);

            deferred.resolve(userProfile);
          } else {
            deferred.reject(status.message);
          }
        }, function(error) { // already reported by HttpInterceptor
          deferred.reject(error.customErrorMessage);
        });

      return deferred.promise;
    }

    function getUserSpaces() {
      var data = {};
      var params = {};
      var deferred = $q.defer();

      DataService.get(config.SERVICES.GET_USER_SPACES, data, params)
        .then(function(response) {
          var list = [];
          var status = response.data.status;
          var content = response.data.content;

          if (status.code === 'OK') {
            _.each(content, function(data) {
              list.push(model.UserSpace.build(data));
            });

            deferred.resolve(list);
          } else {
            deferred.reject(status.message);
          }
        }, function(error) { // already reported by HttpInterceptor
          deferred.reject(error.customErrorMessage);
        });

      return deferred.promise;
    }

    function getUserClosedSpaces() {
      //GET_USER_CLOSED_SPACES
    }

    function getWorkflowTasks() {
      var data = {};
      var params = {};
      var deferred = $q.defer();

      DataService.get(config.SERVICES.GET_WORKFLOW_TASKS, data, params)
        .then(function(response) {
          var list = [];
          var status = response.data.status;
          var content = response.data.content;

          if (status.code === 'OK') {
            _.each(content, function(data) {
              list.push(model.WorkflowTask.build(data));
            });

            deferred.resolve(list);
          } else {
            deferred.reject(status.message);
          }
        }, function(error) { // already reported by HttpInterceptor
          deferred.reject(error.customErrorMessage);
        });

      return deferred.promise;
    }

    // CONSTRUCTOR

    activate();
  }
})();
