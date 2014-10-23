(function () {
  'use strict';

  angular
    .module('accela.core')
    .factory('DataService', service);

  /**
   * @description Provides ajax wrapper.
   *
   * @ngInject
   */
  function service($http, $log, $resource, CONFIG) {

    // CONSTRUCTOR

    activate();

    // PUBLIC interface

    return {
      get: makeRequest,
      post: makeRequest,
      getServiceUrl: getServiceUrl
    };

    // PRIVATE methods

    function activate() {
      $log = $log.getInstance('DATA-SERVICE');
    }

    /**
     * Construct service url from configuration.
     * Also used by unit tests for mocking http responses.
     */
    function getServiceUrl(service, data) {
      var endPoint = service.endPoint;
      var url = CONFIG.USE_MOCK_SERVICES ? ('mock-api/' + service.mockPath) : CONFIG.API_URL;

      if (CONFIG.USE_MOCK_SERVICES) {
        if (endPoint === 'userConsole' && data) {
          endPoint += ('-' + data.consoleId);
        }
        endPoint += '.json';
      }

      return url + endPoint;
    }

//    function makeRequest(service, data, params) {
//      var ajax = $resource(getServiceUrl(service, data), data, {
//        load: { method: 'POST' }
//      });
//
//      return ajax.load(params || {}, data || {}).$promise;
//    }

    function makeRequest(service, data, params) {
      return $http({
        method: 'POST',
        url: getServiceUrl(service, data),
        data: data || {},
        params: params || {}
      });
    }
  }
})();
