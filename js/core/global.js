(function(global) {
  'use strict';

  /**
   * MODIFIED FROM Permit Solution:
   * C:\Users\dbalmer\Documents\GitHub\Role-Based-UI\Accela.RBUI\Scripts\SDK\core\global.js
   */
  if (!global.Accela) {
    global.Accela = (function() {
      var settings = {
        agency: null,
        appId: null,
        appSecret: null,
        appVersion: null,
        browser: null,
        browserVersion: null,
        envName: null,
        userName: null
      };

      function createNamespace(name, value) {
        var part, nso;
        var node = global.Accela;
        var nameParts = name ? name.split('.') : [];
        for (var i = 0; i < nameParts.length; i++) {
          part = nameParts[i];
          nso = node[part];
          if (!nso) {
            nso = value || {};
            node[part] = nso;
          }
          node = nso;
        }
        return node;
      }

      function init(opts) { // called from Accela.RBUI\Scripts\App\Controllers\GlobalController.js
        settings.appId = opts.appId;
        settings.appSecret = opts.appSecret;
        settings.appVersion = opts.appVersion;
        settings.envName = opts.envName;
        settings.agency = opts.agency;
        settings.userName = opts.userName;
        matchBrowser();
      }

      function matchBrowser() {
        var tem;
        var ua = navigator.userAgent;
        var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];

        if (/trident/i.test(M[1])) {
          tem = /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
          return 'IE ' + (tem[1] || '');
        }

        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];

        if ((tem = ua.match(/version\/([\.\d]+)/i)) !== null) {
          M[2] = tem[1];
        }

        settings.browser = M[0];
        settings.browserVersion = M[1];
      }

      /**
       * Create a module within the namespace
       * usage: var foo = Accela.module("xxx.yyy", { foo: 'bar' });
       * usage: var foo = Accela.module("xxx.yyy", function() {...});
       * then you can reference Accela.xxx.yyy
       */
      function module(name, value) {
        if (typeof value === 'function') {
          return createNamespace(name, value);
        } else {
          return angular.copy(value, createNamespace(name));
        }
      }

      return {
        init: init,
        module: module,
        settings: settings
      };
    })();
  }
})(window);
