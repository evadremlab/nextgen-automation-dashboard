/**
 * from Permit Solution - Accela.RBUI\Scripts\App\Services\SafeApply.js
 */
(function() {
  'use strict';

  angular
    .module('accela.core')
    .factory("$safeApply", safeApply);

  function safeApply() {
    return function ($scope, fn) {
      var phase = $scope.$root.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn) {
          $scope.$eval(fn);
        }
      } else {
        if (fn) {
          $scope.$apply(fn);
        } else {
          $scope.$apply();
        }
      }
    }
  }
})();
