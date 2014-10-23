(function() {
  'use strict';

  angular
    .module('accela.automation')
    .controller('AutomationController', controller);

  /**
   * @ngInject
   */
  function controller($log, DataService, CONFIG) {

    // PRIVATE data

    var vm = this;

    // PUBLIC data

    vm.CONFIG = CONFIG;

    // PUBLIC methods

    // CONSTRUCTOR

    activate();

    // PRIVATE methods

    function activate() {
      $log = $log.getInstance('AUTOMATION-CONTROLLER');

      Accela.init({
        appId: CONFIG.APP_ID,
        appSecret: CONFIG.APP_SECRET,
        appVersion: CONFIG.CURRENT_VERSION,
        envName: 'TEST',
        agency: 'BPTDEV',
        userName: 'dbalmer'
      });

      DataService.get(CONFIG.CONSOLE.SERVICES.GET_AVAILABLE_CONSOLES, {});
    }
  }
})();
