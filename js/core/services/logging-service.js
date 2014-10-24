(function() {
  'use strict';

  angular
    .module('accela.core')
    .config(function ($provide, CONFIG) {
      $provide.decorator('$log', function ($delegate) {
        return enhancedLogger($delegate, CONFIG);
      });
    })
    .factory('LoggingService', service);

  /**
   * @ngInject
   */
  function service($log, $window, StacktraceService, CONFIG) {

    // CONSTRUCTOR

    activate();

    // PUBLIC interface

    return {
      critical: criticalHandler,
      debug: debugHandler,
      error: errorHandler,
      exceptionHandler: exceptionHandler,
      info: infoHandler,
      warn: warnHandler
    };

    // PRIVATE methods

    function activate() {
      $log = $log.getInstance('LOGGING-SERVICE');
    }

    function criticalHandler(msg) {
      sendToServer('Critical', msg);
    }

    function debugHandler(msg) {
      sendToServer('Debug', msg);
    }

    function errorHandler(msg) {
      sendToServer('Error', msg);
    }

    function exceptionHandler(exception, cause) {
      // NOTE: In production, add some debouncing
      // logic here to prevent the same client from
      // logging the same error over and over again.
      try {
        var message = exception.toString();
        var stackTrace = StacktraceService.print({ e: exception });

        $log.warn(message);

        sendToServer('Critical', message, stackTrace, cause);

      } catch (ex) {
        if (console && console.warn) {
          console.warn('Error logging failed : ' + ex.message);
        }
      }
    }

    function infoHandler(msg) {
      sendToServer('Info', msg);
    }

    function sendToServer(logLevel, message, stacktrace, cause) {
      if (CONFIG.LOG_CLIENT_ERRORS) {
        writeLog({
          logLevel: logLevel || 'Info',
          message: message || '',
          stacktrace: stacktrace || '',
          cause: cause || ''
        });
      }
    }

    function warnHandler(msg) {
      sendToServer('Warn', msg);
    }

    /**
     * Using XMLHttpRequest instead of $http to avoid circular dependencies.
     */
    function writeLog(logData) {
      var url = CONFIG.USE_MOCK_SERVICES ? 'mock-api/logClientMsg.json' : CONFIG.LOG_URL;

      angular.extend(logData, Accela.settings, {
        url: $window.location.href
      });

      Accela.Utils.XmlHttp.post(url, logData, CONFIG.LOG_ACCESS_KEY);
    }
  }

  /**
   * Add prefix to $log messages for debugging.
   *
   * SEE: http://solutionoptimist.com/2013/10/07/enhance-angularjs-logging-using-decorators/
   */
  function enhancedLogger(log, config) {
    var logEnabled = (config.CONSOLE_LOGGING_ENABLED);

    var _$log = { // capture the original methods
      log   : (logEnabled ? log.log : angular.noop),
      info  : (logEnabled ? log.info : angular.noop),
      debug : (logEnabled ? log.debug : angular.noop),
      warn  : log.warn,
      error : log.error
    };

    function prepareLogFn(logFn, prefix) {

      var enhancedLogFn = function() {
        var args = [].slice.call(arguments);

        if (prefix) { // prepend an optional prefix to the original message
          args[0] = prefix + ' : ' + args[0];
        }

        logFn.apply(null, args); // invoke $log method with our prefixed message
      };

      enhancedLogFn.logs = []; // add support for angular-mocks expectations

      return enhancedLogFn;
    }

    // add a new $log method returning an extended $log

    log.getInstance = function(prefix) {
      var logInstance = {
        log: prepareLogFn(_$log.log, prefix),
        info: prepareLogFn(_$log.info, prefix),
        debug: prepareLogFn(_$log.debug, prefix),
        warn: prepareLogFn(_$log.warn, prefix),
        error: prepareLogFn(_$log.error, prefix),
        format: function(msg) {
          return prefix + ' : ' + msg;
        }
      };

      logInstance.debug('created');

      return logInstance;
    };

    return log;
  }
})();
