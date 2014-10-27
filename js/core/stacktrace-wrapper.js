(function() {
  'use strict';

  angular
    .module('accela.core')
    .factory('StacktraceService', function() {
      return {
        print: printStackTrace // assumes stacktrace library has already been loaded
      };
    });
})();
