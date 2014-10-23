(function() {
  'use strict';

  angular
    .module('accela.automation')
    .controller('DashboardController', controller);

  /**
   * @ngInject
   */
  function controller($log) {

    // PRIVATE data

    var vm = this;

    // PUBLIC data

    vm.spaces = ['BLD-00089', 'Search', 'Person'];

    // PUBLIC methods

    vm.closeSpace = function(index) {
      vm.spaces.splice(index, 1);
    };

    // CONSTRUCTOR

    activate();

    // PRIVATE methods

    function activate() {
      $log = $log.getInstance('DASHBOARD-CONTROLLER');
    }
  }
})();
