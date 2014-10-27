/**
 * http://stackoverflow.com/questions/18790333/angular-js-render-value-without-data-binding
 */
(function() {
  'use strict';
  angular
    .module('accela.core')
    .directive('bindOnce', function() {
      return {
        scope: true,
        link: function( $scope, $element ) {
          setTimeout(function() {
            $scope.$destroy();
            $element.removeClass('ng-binding ng-scope');
          }, 0);
        }
      };
    });
})();
