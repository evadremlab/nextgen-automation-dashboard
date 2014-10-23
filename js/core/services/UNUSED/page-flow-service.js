(function() {
  'use strict';

  angular
    .module('accela.core')
    .factory('PageFlowService', service);

  /**
   * ngInject
   */
  function service($log, $state, DataService) {

    // PRIVATE data

    // CONSTRUCTOR

    activate();

    // PUBLIC methods

    return {
      fetch: fetch
    };

    // PRIVATE methods

    function activate() {
      $log = $log.getInstance('PAGE-FLOW-SERVICE');
    }

    function fetch(serviceRequest, data) {
      PageDataService.get(serviceRequest, data)
        .then(dataLoaded, dataFailedToLoad);
    }

    /**
     * JSON data loaded ok.
     */
    function dataLoaded(response) {
      var newRoute;
      var status = response.data.status;
      var routing = response.data.routing;
      var content = response.data.content;

      if (status.code === 'OK') {
        if (routing && routing.route) {
          newRoute = routing.route.replace('.index', ''); // "index" is a root state, so remove ".index"
          if ($state.get(newRoute)) {
            $log.log(sprintf('routing to "%s"', newRoute));
            $state.go(newRoute);
          } else {
            throw new Error(sprintf('route "%s" not defined', newRoute));
          }
        }
      } else {
        $log.warn(response.customErrorMessage);
      }
    }

    /**
     * JSON data load failed.
     */
    function dataFailedToLoad(error) {
      // already logged by HttpInterceptor
      alert(error.customErrorMessage);
    }
  }
})();
