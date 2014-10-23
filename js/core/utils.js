(function() {
  'use strict';

  Accela.module('Utils', {
    /**
     * Used for sending error details to the server
     * and for unit testing with mock data.
     */
    createXHRObject: function() {
      try {
        return new XMLHttpRequest();
      } catch (ex) {
        try {
          return new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (ex) {
          try {
            return new ActiveXObject('Microsoft.XMLHTTP');
          } catch (ex) {
            throw new Error('No XHR object found in this environment.');
          }
        }
      }
    }
  });
})();
