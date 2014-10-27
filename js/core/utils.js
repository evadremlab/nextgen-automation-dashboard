(function() {
  'use strict';

  /**
   * trying to avoid using jQuery :-)
   *
   * may need to polyfill...
   */
  Accela.module('$', function(selector) {
    // usage: Accela.$('#big-nav').toggleClass('hidden');
    return angular.element(document.querySelector(selector));
  });
  Accela.module('$$', function(selector) {
    // usage: Accela.$('.row').toggleClass('hidden');
    return angular.element(document.querySelectorAll(selector));
  });

  Accela.module('Utils.XmlHttp', (function() {
    /**
     * Used for sending error details to the server
     * and for unit testing with mock data.
     */
    function createXHRObject() {
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

    return {
      /**
       * Make synchronous request to load json files
       * defined in karma.conf.js under "files: [ { pattern : } ]"
       */
      getMockData: function(serviceUrl, isUnitTesting) {
        var data = {};
        var xhr = createXHRObject();

        if (isUnitTesting) {
          xhr.open('GET', 'base/' + serviceUrl, false); // 'base/' prefix required to locate files
        } else {
          xhr.open('GET', serviceUrl, false);
        }

        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.send(null);

        if (xhr.status === 200) {
          data = angular.fromJson(xhr.responseText);
        }

        return data;
      },
      /**
       * Make async request to send log details to server
       */
      post: function(url, logData, accesskey) {
        var xhr = createXHRObject();

        xhr.open('POST', url, true); // async request
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

        if (accesskey) {
          xhr.setRequestHeader('accesskey', accesskey);
        }

        xhr.send(JSON.stringify(logData));
      }
    };
  })());
})();
