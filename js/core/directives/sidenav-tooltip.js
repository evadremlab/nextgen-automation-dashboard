(function() {
  'use strict';

  angular.
  module('accela.core')
  .directive("sidenavTooltip", function($compile) {
    return {
      restrict: 'A',
      priority: 1001, // compiles first
      terminal: true, // prevent lower priority directives to compile after it
      compile: function(el, attrs) {
        el.removeAttr('sidenav-tooltip'); // necessary to avoid infinite compile loop
        el.attr('tooltip', attrs.sidenavTooltip);
        el.attr('tooltip-trigger', 'mouseenter');
        el.attr('tooltip-placement', 'right');
        el.attr('tooltip-popup-delay', '500');
        var fn = $compile(el);
        return function(scope){
          fn(scope);
        };
      }
    };
  });
})();
