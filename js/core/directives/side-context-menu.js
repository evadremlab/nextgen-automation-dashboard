(function() {
  'use strict';

  angular.
    module('accela.core')
    .directive('sideContextMenu', function($timeout) {
      return {
        restrict: 'A',
        link: function($scope, element, attributes) {
          var activated = false;
          var id = '#side-context-menu-' + attributes.sideContextMenu;

          element.on('mouseover', function() {
            $timeout(function() { // add a delay before showing the menu
              var menu = angular.element(document.querySelector(id));

              function close() {
                element.unbind('mouseout');
                menu.css('display', 'none').unbind('mouseover mouseout mouseup');
              }

              menu.css('display', 'block');

              menu.on('mouseover', function() {
                activated = true;
              }).on('mouseout', function() {
                activated = false;
                $timeout(function() { // allow time for another menu item in this list to be selected
                  if (!activated) {
                    close();
                  }
                }, 100);
              }).on('mouseup', function() { // close after clicking menu item
                close();
              });

              element.on('mouseout', function() {
                $timeout(function() { // allow time to activate menu
                  if (!activated) {
                    close();
                  }
                }, 1000);
              });
            }, 500);
          });
        }
      };
    });
})();
