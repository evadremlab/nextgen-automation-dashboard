(function() {
  'use strict';

  angular
    .module('accela.core')
    .controller('CoreController', controller);

  /**
   * @ngInject
   *
   * TODO: refactor this into a separate component that will manage only the Menu Bar.
   */
  function controller($rootScope, $scope, $filter, $location, $log, $timeout, $window, LoggingService, UserManager, CONFIG) {

    // PRIVATE data

    // PUBLIC data

    $scope.activeSubMenu = $location.path();
    $scope.showcount = 0;
    $scope.spaceList = [];

    // EVENT handlers

//    // listening url change
//    $scope.$on('$locationChangeSuccess', function () {
//      $log.info('$locationChangeSuccess EVENT');
////      var space = $scope.getSpaceById();
////      if (space != null && space.SpaceType == 'new') {
////        var URL = $location.path();
////        if (URL == '/' || space.URL == URL) {
////          return;
////        }
////        var newSpace = $scope.setSpaceNameAndURL(space.Name, URL);
////        if (newSpace.update) {
////          SpaceService.updateSpace(newSpace.Name, newSpace.URL, space.ID, newSpace.SpaceType);
////        }
////      }
////      $scope.setSpaceClick();
//    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
      var msg = sprintf('$stateChangeError : %s : %s' + JSON.stringify(toState), JSON.stringify(error));
      $log.warn(msg);
      LoggingService.error(msg);
    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $scope.activeSubMenu = $location.path();
    });

    $rootScope.$on('dashboard.clickSpace', function (d, id, url) {
      // TODO: replace this with $state.go('xxx')
      $log.info('clickSpace EVENT');
//      $rootScope.SpaceSelectedId = id;
//      $location.path(url);
    });

    $rootScope.$on('dashboard.getFilter', function () {
      $log.info('GetFilter EVENT');
//      $scope.getSpaceFilter();
    });

    $rootScope.$on('dashboard.refreshSpace', function (event) {
      $log.info('refreshSpace EVENT');
//        $scope.getSpaceList();
    });

    $rootScope.$on('dashboard.saveSearchResult', function (d, type, data, key, spaceType) {
      $log.info('saveSearchResult EVENT');
//      var space = $filter('filter')($scope.spaceList, function (item) {
//        return item.ID == $rootScope.SpaceSelectedId;
//      });
//
//      //var searchKey = '';
//
//      var name = type;
//      if (space==null || space.length < 1) {
//        return;
//      }
//
//      data['SearchType'] = type;
//      data['permitschecked'] = key;
//
//      SpaceService.addFilter($rootScope.SpaceSelectedId, data, function (data) {
//        var nameTmp = space[0].Name.split('(')[0];
//        if (nameTmp != name) {
//          $scope.setClickSpace($rootScope.SpaceSelectedId);
//          var newName = $scope.setSpaceNewName(name.substr(0, 30));
//          SpaceService.updateSpace(newName, space[0].URL, $rootScope.SpaceSelectedId, spaceType);
//
//        } else {
//          $scope.getSpaceList();
//        }
//      });
    });

    $rootScope.$on('dashboard.spaceUpdateNameUrl', function (d, name, url, oldType , type) {
      $log.info('spaceUpdateNameUrl EVENT');
//      if ($rootScope.SpaceSelectedId == null) {
//        $scope.setSpaceClick();
//      }
//      if ($rootScope.SpaceSelectedId != null) {
//        var space = $scope.getSpaceById();
//        if (space != null && space.SpaceType == oldType) {
//          var urlTmp = url == '' ? space.URL : url;
//          SpaceService.updateSpace(name, urlTmp, $rootScope.SpaceSelectedId, type);
//
//          $scope.setClickSpace($rootScope.SpaceSelectedId);
//        }
//      }
    });

    $rootScope.$on('dashboard.updateUserSpaces', function () {
      $log.info('updateUserSpaces EVENT');
//        $scope.getSpaceList();
    });

    // PUBLIC methods

    $scope.changeUrl = function (action) {
      $log.info('$scope.changeUrl()');
//      switch (action) {
//        case 'spaceNew':
//          var name = $scope.setSpaceNewName('Untitled Space');
//          var url = '/SpaceNew';
//          var type = 'new';
//          SpaceService.Create(name, url, type, function (data) {
//            $scope.getSpaceList(function () {
//              $rootScope.SpaceSelectedId = data.result[0].ID;
//              $scope.setClickSpace(data.result[0].ID);
//              if ($location.path() == url) {
//                $route.reload();
//              } else {
//                $location.path('/SpaceNew');
//              }
//            });
//          });
//          break;
//        default:
//          break;
//      }
    };

    $scope.clickRouting = function (ID, routingurl, spaceType) {
      $log.info('$scope.clickRouting()');
//      $rootScope.SpaceSelectedId = ID;
//
//      $scope.setImage(ID, spaceType);
//
//      if (routingurl == $location.path()) {
//        if (spaceType.toLowerCase() == 'new' || spaceType.toLowerCase() == 'search') {
//
//          SpaceService.GetFilter($rootScope.SpaceSelectedId, function (data) {
//            if (data.result.length < 1) {
//              $route.reload();
//            } else {
//              if (data.result.length > 0) {
//                var searchData = JSON.parse(data.result[0].Conditions);
//                $rootScope.$broadcast('SpaceAutoSearch', searchData);
//              }
//            }
//          });
//        }
//      } else {
//        $location.path(routingurl);
//      }
    };

    $scope.closeSpace = function (ID) {
      $log.info('$scope.closeSpace()');
//      $scope.spaceCloseAnimate(ID, function () { });
//
//      SpaceService.closeUserSpace(ID, function (data) {
//        $scope.getSpaceList();
//        $rootScope.$broadcast('userSpaceClose');
//      });
    };

    $scope.createSpace = function (Name, URL, type) {
      $log.info('$scope.createSpace()');
//      SpaceService.Create(Name, URL, type, function (data) {
//        $scope.getSpaceList();
//      });
    };

    $scope.dblClick = function (ID, Name) {
      $log.info('$scope.dblClick()');
//      $('#' + ID).hide();
//      $('#textarea_' + ID).show();
//      $('#textarea_' + ID).trigger('focus');

      Accela.$('#' + ID).addClass('hidden');
      Accela.$('#textarea_' + ID).removeClass('hidden');
      Accela.$('#textarea_' + ID).triggerHandler('focus');
    };

    $scope.deleteSpace = function (spaceID) {
      $log.info('$scope.deleteSpace()');
//      LoadingService.show();
//
//      SpaceService.deleteSpace(spaceID, function (data) {
//        $scope.getSpaceList();
//        LoadingService.hide();
//      });
    };

    $scope.duplicateSpace = function (spaceID) {
      $log.info('$scope.duplicateSpace()');
//      //$rootScope.SpaceSelectedId = 0;
//      LoadingService.show();
//      SpaceService.duplicateSpace(spaceID, function (data) {
//        LoadingService.hide();
//        try {
//          $scope.setClickSpace(data.result.ID);
//          $scope.getSpaceList();
//        } catch (e) {
//
//        }
//      });
    };

    $scope.getSpaceById = function () {
      $log.info('$scope.getSpaceById()');
//      var space = $filter('filter')($scope.spaceList, function (item) {
//        return item.ID == $rootScope.SpaceSelectedId;
//      });
//      if (space==null || space.length <= 0) {
//        return space;
//      }
//      return space[0];
    };

    $scope.getSpaceFilter = function () {
      $log.info('$scope.getSpaceFilter()');
//      var space = $scope.getSpaceById();
//      if (space != null && space.URL == $location.path() && space.SpaceType.toLowerCase() == 'search') {
//
//        SpaceService.GetFilter(space.ID, function (data) {
//          if (data.result.length > 0) {
//            var searchData = JSON.parse(data.result[0].Conditions);
//            $rootScope.$broadcast('SpaceAutoSearch', searchData);
//          }
//        });
//      }
    };

    $scope.getSpaceList = function (funcName) {
      $log.info('$scope.getSpaceList()');

      UserManager.getUserSpaces().then(function(data) {
        $scope.spaceList = data;
        $timeout(calcSpacesCount, 10);
      });

//      $scope.setSpaceClick();
//      LoadingService.show();
//      SpaceService.GetSpacesList(function (data) {
//        if (data.result != 300) {
//          $safeApply($scope, function () {
//            $scope.spaceList = data.result;
//          });
//
//          $scope.setSpaceClick();
//
//          LoadingService.hide();
//
//          if (funcName instanceof Function) {
//            funcName();
//          }
//        }
//      });
    };

    $scope.isPermitRecord = function (spaceType) {
      var flag = false;
      if (spaceType === 'submitPermit') {
        flag = true;
      }
      return flag;
    };

    $scope.locationGoto = function (url) {
      $location.path(url);
    };

    $scope.logout = function() {
      $log.debug('logout');
    };

    $scope.operate = function (action, Url) {
      $log.info('$scope.operate()');
//      //        $scope.createSpace(action, Url);
//      switch (action.toLowerCase()) {
//        case 'permits':
//          $location.path('/#/Intake');
//          break;
//        case 'inspections':
//          break;
//        case 'People':
//        case 'locations':
//          break;
//        default:
//          break;
//      }
    };

    $scope.pinSortID = function (pinType, spaceID) {
      $log.info('$scope.pinSortID()');
//      LoadingService.show();
//      SpaceService.pinSortID(pinType, spaceID, function (data) {
//        LoadingService.hide();
//        $scope.getSpaceList();
//      });
    };

    $scope.quickAdd = function (ID) {
      $log.info('$scope.quickAdd()');
//      var space = $filter('filter')($scope.spaceList, function (item) {
//        return item.ID == ID;
//      });
//      var newURL = space[0].URL.replace('PermitSummary', 'SubmissionComplete/submited');
//      $location.url(newURL);
//      // $location.url(space.URL);
//      $rootScope.$broadcast('showQuickAdd');
    };

    $scope.setClickSpace = function (id) {
      $log.info('$scope.setClickSpace()');
//      $safeApply($rootScope, function () {
//        if ($rootScope.clickID != id) {
//          $rootScope.clickID = id;
//        }
//      });
    };

    $scope.setCurrentToEnd = function (ID, Nowindex) {
      $log.info('$scope.setCurrentToEnd()');
//
//      var selectedspace = $filter('filter')($scope.spaceList, function (item) {
//        return item.ID == ID;
//      });
//
//      var index = $scope.showcount;
//
//      var spacelist = $scope.spaceList[index];
//
//      $scope.spaceList[index] = angular.copy(selectedspace[0]);
//      $scope.spaceList[Nowindex] = angular.copy(spacelist);
//
//      $rootScope.SpaceSelectedId = ID;
//      $location.path(selectedspace[0].URL);
//
//      $scope.getSpaceFilter();
    };

    $scope.setImage = function (ID, spaceType) {
      var src = '';

      switch ((spaceType || '').toLowerCase()) {
        case 'permits':
        case 'submitpermits':
          src = $rootScope.SpaceSelectedId === ID ? 'permits_icon_default.png' : 'permits_icon_selected.png';
          break;
        case 'people':
          src = $rootScope.SpaceSelectedId === ID ? 'people_icon_default.png' : 'people_icon_selected.png';
          break;
        case 'search':
          src = $rootScope.SpaceSelectedId === ID ? 'search_icon_default.png' : 'search_icon_selected.png';
          break;
        default:
          src = $rootScope.SpaceSelectedId === ID ? 'untitled_icon_default.png' : 'untitled_icon_selected.png';
          break;
      }
      return src;
    };

    $scope.setSpaceClick = function () {
      $log.info('$scope.setSpaceClick()');
//      var space = $filter('filter')($scope.spaceList, function (item) {
//        return item.URL == $location.path();
//      });
//      if ($rootScope.SpaceSelectedId != null) {
//
//        var selectSpace = $filter('filter')($scope.spaceList, function (item) {
//          return item.ID == $rootScope.SpaceSelectedId;
//        });
//        if (selectSpace != null && selectSpace.length > 0 && selectSpace[0].SpaceType == 'new') {
//          $scope.getSpaceFilter();
//          return;
//        }
//
//        for (var i in space) {
//          if (space[i].ID == $rootScope.SpaceSelectedId) {
//            $scope.getSpaceFilter();
//            return;
//          }
//        }
//      }
//      if (space != null && space.length > 0) {
//        $rootScope.SpaceSelectedId = space[0].ID;
//        $scope.getSpaceFilter();
//      } else {
//        $rootScope.SpaceSelectedId = 0;
//      }
    };

    $scope.setSpaceNewName = function (name) {
      var count = -1;
      for (var i in $scope.spaceList) {
        var spaceName = $scope.spaceList[i].Name;
        var spaceNames = spaceName.split('(');
        var realName = spaceNames[0];
        if (realName === name) {
          if (spaceNames.length > 1) {
            var countTmp = spaceNames[1].split(')')[0];
            count = parseInt(count) > parseInt(countTmp) ? count : countTmp;
          } else {
            count = count === -1 ? 0 : count;
          }
        }
      }
      count++;
      return count === 0 ? name : name + '(' + count + ')';
    };

    $scope.setSpaceNameAndURL = function (name, URL) {
      var newName = name;
      var url = URL.split('/')[1];
      var update = true;
      var type = 'new';
      switch (url) {
        case 'Permits':
          newName = 'Permits';
          type = 'Permits';
          break;
        case 'Inspections':
          newName = 'Inspections';
          type = 'Inspections';
          break;
        case 'Intake':
          newName = 'New Application';
          break;
        case 'SpaceNew':
          newName = 'Untitled Space';
          break;
        case 'InspectionSummary':
          update = false;
          break;
        case 'FinalizePermits':
          update = false;
          break;
        case 'SubmissionComplete':
          update = false;
          break;
        default:
          update = false;
          //newName = $scope.setSpaceNewName('Untitled Space');
          //URL = '/SpaceNew';
          break;
      }
      var space = {};
      space.Name = $scope.setSpaceNewName(newName);
      space.URL = URL;
      space.SpaceType = type;
      space.update = update;
      return space;
    };

    $scope.spaceAction = function (Action, spaceID) {
      $log.info(sprintf('$scope.spaceAction(%s, %s)', Action, spaceID));
//      switch (Action.toLowerCase()) {
//        case 'pin':
//          $scope.pinSortID('pin', spaceID);
//          break;
//        case 'unpin':
//          $scope.pinSortID('unpin', spaceID);
//          break;
//        case 'duplicate':
//          $scope.duplicateSpace(spaceID);
//          break;
//        case 'close':
//          $scope.closeSpace(spaceID);
//          break;
//        case 'quickadd':
//          $scope.quickAdd(spaceID);
//          break;
//      }
    };

    $scope.spaceCloseAnimate = function (id, func) {
      $log.info('$scope.spaceCloseAnimate()');
//      if (id == null || id == 0) {
//        return;
//      }
//
//      var space = $('#space_' + id);
//      space.css('z-index', '-10');
//      space.animate({ marginTop: '-95', opacity: '0' }, {
//        speed: 'normal', easing: 'swing', queue: false, complete: func
//      });
    };

    $scope.updateSpaceList = function (ID, URL) {
      $log.info('$scope.updateSpaceList()');
//      LoadingService.show();
//      var Name = document.getElementById('textarea_' + ID).value;
//      Name = $.trim(Name);
//      if (Name == '') {
//        $scope.getSpaceList();
//        return;
//      }
//
//      SpaceService.UpdateSpaceName(Name, ID, function (data) {
//        $('#' + ID).show();
//        $('#textarea_' + ID).hide();
      Accela.$('#' + ID).removeClass('hidden');
      Accela.$('#textarea_' + ID).addClass('hidden');
//        $scope.getSpaceList();
//        LoadingService.hide();
//      });
    };

    // PRIVATE methods

    /**
     * DONE
     */
    function activate() {
      $log = $log.getInstance('CORE-CONTROLLER');

      Accela.init({
        appId: CONFIG.APP_ID,
        appSecret: CONFIG.APP_SECRET,
        appVersion: CONFIG.CURRENT_VERSION,
        envName: 'TEST',
        agency: 'BPTDEV',
        userName: 'dbalmer'
      });

      function resizeHandler() {
        $timeout(calcSpacesCount, 500);
      }

      angular.element($window).bind('resize', _.debounce(resizeHandler, 500));

      $scope.getSpaceList();
    }

    /**
     * DONE
     */
    function calcSpacesCount() {
      var moreHeight = 30;
      var navHeight = Accela.$('#big-nav').prop('offsetHeight');
      var tileHeight = Accela.$('#tileGroupDiv').prop('offsetHeight');
      var footerHeight = Accela.$('#nav-last-li').prop('offsetHeight');
      var spaceWidth = Accela.$('#spaceGroupDiv').prop('offsetWidth');
      var spaceHeight = document.body.offsetWidth <= 768 ? 50 : 95;
      var availableHeight = navHeight - tileHeight - footerHeight;
      var viewableCount = Math.floor(availableHeight / spaceHeight);

      if (viewableCount < $scope.spaceList.length) { // need to account for "x more" space
        viewableCount = Math.floor((availableHeight-= moreHeight) / spaceHeight);
      }

      $scope.showcount = viewableCount;
    }

    // CONSTRUCTOR

    activate();
  }
})();
