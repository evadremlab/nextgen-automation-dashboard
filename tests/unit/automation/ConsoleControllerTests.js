'use strict';

describe('ConsoleController:Tests', function() {
  var ctrl, scope;

  beforeEach(function() {
    module('accela.automation');

    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('ConsoleController', {
        $scope: scope
      });
    });
  });

  it('should define the controller', function() {
    expect(ctrl).toBeDefined();
  });
});