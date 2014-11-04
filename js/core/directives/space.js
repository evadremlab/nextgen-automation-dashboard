(function() {
  'use strict';

  angular.
    module('accela.core')
    .directive("aaSpaceMenu", function($log, $timeout) {
      return {
        restrict: 'A',
        link: function($scope, elem, attrs) {
          var activated = false;
          var spaceMenu = angular.element(document.querySelectorAll('.space-menu-btn-group ul.dropdown-menu')[attrs.aaSpaceMenu]);

          function close() {
            activated = false;
            spaceMenu.addClass('hidden');
          }

          elem.on('mouseover', function() {
            spaceMenu.removeClass('hidden');
          });

          elem.on('mouseout', function() {
            $timeout(function() {
              if (!activated && !spaceMenu.hasClass('hidden')) { // open, but never activated
                close();
              }
            }, 500); // give them time to mouseover the space menu
          });

          spaceMenu.on('mouseover', function() {
            activated = true;
          });

          spaceMenu.on('mouseout', function() {
            close();
          });

          spaceMenu.on('mouseup', function() { // close after clicking link
            close();
          });
        }
      };
    });
})();
