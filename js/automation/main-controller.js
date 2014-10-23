(function() {
  'use strict';

  angular
    .module('accela.automation')
    .controller('MainController', controller);

  /**
   * @ngInject
   */
  function controller($rootScope, $scope, $location, $log) {

    // PRIVATE data

    var resizeTimer = null;

    // PUBLIC data

    $scope.showcount = 0;
    $scope.lastSpaceWidth = 0;
    $scope.activeSubMenu = $location.path();
    $scope.spaceList = [];

    $scope.$on("$routeChangeStart", function (next, current) {
      $scope.activeSubMenu = $location.path();
    });

    // PUBLIC methods

    // CONSTRUCTOR

    activate();

    // PRIVATE methods

    function activate() {
      $log = $log.getInstance('MAIN-CONTROLLER');

//      $(window).resize(function () {
//        resizeTimer = resizeTimer ? null : setTimeout(calcSpacesCount, 1000);
//      });
    }

//    $rootScope.$on("refreshSpace", function (event) {
//      $scope.GetSpaceList();
//    });
//
//    $rootScope.$on("updateUserSpaces", function () {
//      $scope.GetSpaceList();
//    });

    // get space list
    $scope.GetSpaceList = function (funcName) {
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
        $scope.spaceList = [
          {
            ID: 1,
            PinSortID: 0,
            Name: 'fubar',
            URL: '',
            SpaceType: 'new'
          },
          {
            ID: 2,
            PinSortID: 0,
            Name: 'Permits',
            URL: '',
            SpaceType: 'Permits'
          },
          {
            ID: 3,
            PinSortID: 0,
            Name: 'SubPermits',
            URL: '',
            SpaceType: 'SubPermits'
          }
        ];
    };

    // ready
//    $(document).ready(function () {
//      //   resizeTimer = resizeTimer ? null : setTimeout(calcSpacesCount, 1000);
//      if (!resizeTimer) {
//        resizeTimer = setTimeout(calcSpacesCount, 1000);
        $scope.GetSpaceList();
//      }
//      else {
//        resizeTimer = null;
//      }
//    });

    // create spaces
    $scope.CreateSpaceList = function (Name, URL, type) {
//      SpaceService.Create(Name, URL, type, function (data) {
//        $scope.GetSpaceList();
//      });
    };

    // delete space by space id
    $scope.DeleteSpaceList = function (spaceID) {
//      LoadingService.show();
//
//      SpaceService.deleteSpace(spaceID, function (data) {
//        $scope.GetSpaceList();
//        LoadingService.hide();
//      });
    };

    // listening url change
    $scope.$on("$locationChangeSuccess", function () {
//      var space = $scope.getSpaceById();
//      if (space != null && space.SpaceType == "new") {
//        var URL = $location.path();
//        if (URL == "/" || space.URL == URL) {
//          return;
//        }
//        var newSpace = $scope.setSpaceNameAndURL(space.Name, URL);
//        if (newSpace.update) {
//          SpaceService.updateSpace(newSpace.Name, newSpace.URL, space.ID, newSpace.SpaceType);
//        }
//      }
//      $scope.setSpaceClick();
    });

    $scope.getSpaceById = function () {
      var space = $filter("filter")($scope.spaceList, function (item) {
        return item.ID == $rootScope.SpaceSelectedId;
      });
      if (space==null || space.length <= 0) {
        return space;
      }
      return space[0];
    };

    $scope.setSpaceNameAndURL = function (name, URL) {
      var newName = name;
      var url = URL.split("/")[1];
      var update = true;
      var type = "new";
      switch (url) {
        case "Permits":
          newName = "Permits";
          type = "Permits";
          break;
        case "Inspections":
          newName = "Inspections";
          type = "Inspections";
          break;
        case "Intake":
          newName = "New Application";
          break;
        case "SpaceNew":
          newName = "Untitled Space";
          break;
        case "InspectionSummary":
          update = false;
          break;
        case "FinalizePermits":
          update = false;
          break;
        case "SubmissionComplete":
          update = false;
          break;
        default:
          update = false;
          //newName = $scope.setSpaceNewName("Untitled Space");
          //URL = "/SpaceNew";
          break;
      }
      var space = {};
      space.Name = $scope.setSpaceNewName(newName);
      space.URL = URL;
      space.SpaceType = type;
      space.update = update;
      return space;
    };

    $rootScope.$on("spaceUpdateNameUrl", function (d, name, url, oldType , type) {
//      if ($rootScope.SpaceSelectedId == null) {
//        $scope.setSpaceClick();
//      }
//      if ($rootScope.SpaceSelectedId != null) {
//        var space = $scope.getSpaceById();
//        if (space != null && space.SpaceType == oldType) {
//          var urlTmp = url == "" ? space.URL : url;
//          SpaceService.updateSpace(name, urlTmp, $rootScope.SpaceSelectedId, type);
//
//          $scope.setClickSpace($rootScope.SpaceSelectedId);
//        }
//      }
    });

    $rootScope.$on("clickSpace", function (d, id, url) {
//      $rootScope.SpaceSelectedId = id;
//      $location.path(url);
    });

    $rootScope.$on("saveSearchResult", function (d, type, data, key, spaceType) {
//      var space = $filter("filter")($scope.spaceList, function (item) {
//        return item.ID == $rootScope.SpaceSelectedId;
//      });
//      //var searchKey = "";
//
//      var name = type;
//      if (space==null || space.length < 1) {
//        return;
//      }
//
//      data["SearchType"] = type;
//      data["permitschecked"] = key;
//
//      SpaceService.addFilter($rootScope.SpaceSelectedId, data, function (data) {
//        var nameTmp = space[0].Name.split("(")[0];
//        if (nameTmp != name) {
//          $scope.setClickSpace($rootScope.SpaceSelectedId);
//          var newName = $scope.setSpaceNewName(name.substr(0, 30));
//          SpaceService.updateSpace(newName, space[0].URL, $rootScope.SpaceSelectedId, spaceType);
//
//        } else {
//          $scope.GetSpaceList();
//        }
//      });
    });

    $scope.setSpaceClick = function () {
//      var space = $filter("filter")($scope.spaceList, function (item) {
//        return item.URL == $location.path();
//      });
//      if ($rootScope.SpaceSelectedId != null) {
//
//        var selectSpace = $filter("filter")($scope.spaceList, function (item) {
//          return item.ID == $rootScope.SpaceSelectedId;
//        });
//        if (selectSpace != null && selectSpace.length > 0 && selectSpace[0].SpaceType == "new") {
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

    // *********************************************************************
    // spaces Action function

    $scope.SpaceAction = function (Action, spaceID) {
//      switch (Action.toLowerCase()) {
//        case "pin":
//          $scope.PinSortID("pin", spaceID);
//          break;
//        case "unpin":
//          $scope.PinSortID("unpin", spaceID);
//          break;
//        case "duplicate":
//          $scope.DuplicateSpace(spaceID);
//          break;
//        case "close":
//          $scope.CloseSpaceList(spaceID);
//          break;
//        case "quickadd":
//          $scope.quickAdd(spaceID);
//          break;
//      }
    };

    $scope.quickAdd = function (ID) {
//      var space = $filter("filter")($scope.spaceList, function (item) {
//        return item.ID == ID;
//      });
//      var newURL = space[0].URL.replace("PermitSummary", "SubmissionComplete/submited");
//      $location.url(newURL);
//      // $location.url(space.URL);
//      $rootScope.$broadcast("showQuickAdd");
    };

    $scope.isPermitRecord = function (spaceType) {
      var flag = false;
      if (spaceType == "submitPermit") {
        flag = true;
      }
      return flag;
    };

    $scope.CloseSpaceList = function (ID) {
//      $scope.spaceCloseAnimate(ID, function () { });
//
//      SpaceService.closeUserSpace(ID, function (data) {
//        $scope.GetSpaceList();
//        $rootScope.$broadcast("userSpaceClose");
//      });
    };

    $scope.PinSortID = function (pinType, spaceID) {
//      LoadingService.show();
//      SpaceService.pinSortID(pinType, spaceID, function (data) {
//        LoadingService.hide();
//        $scope.GetSpaceList();
//      });
    };


    $scope.DuplicateSpace = function (spaceID) {
//      //$rootScope.SpaceSelectedId = 0;
//      LoadingService.show();
//      SpaceService.duplicateSpace(spaceID, function (data) {
//        LoadingService.hide();
//        try {
//          $scope.setClickSpace(data.result.ID);
//          $scope.GetSpaceList();
//        } catch (e) {
//
//        }
//      });
    };

    // *********************************************************************
    // public function

    // space close animate

    $scope.spaceCloseAnimate = function (id, func) {
//      if (id == null || id == 0) {
//        return;
//      }
//
//      var space = $("#space_" + id);
//      space.css("z-index", "-10");
//      space.animate({ marginTop: "-95", opacity: "0" }, {
//        speed: "normal", easing: "swing", queue: false, complete: func
//      });
    };

    // add click space class
    $scope.setClickSpace = function (id) {
//      $safeApply($rootScope, function () {
//        if ($rootScope.clickID != id) {
//          $rootScope.clickID = id;
//        }
//      });
    };

    $scope.substring = function (str) {
      var subStr = str;
      var len = 20;
      if (str.length > len) {
        subStr = str.substring(0, len / 2) + "-" + str.substring(len / 2, len) + "...";
      }
      return subStr;
    };

    $scope.setimgcss = function (ID, spaceType) {
      var imgsrc = "";

      spaceType = spaceType == null ? "null" : spaceType;

      switch (spaceType.toLowerCase()) {
        case "permits":
        case "submitpermits":
          imgsrc = $rootScope.SpaceSelectedId == ID ? "permits_icon_default.png" : "permits_icon_selected.png";
          break;
        case "people":
          imgsrc = $rootScope.SpaceSelectedId == ID ? "people_icon_default.png" : "people_icon_selected.png";
          break;
        case "search":
          imgsrc = $rootScope.SpaceSelectedId == ID ? "search_icon_default.png" : "search_icon_selected.png";
          break;
        default:
          imgsrc = $rootScope.SpaceSelectedId == ID ? "untitled_icon_default.png" : "untitled_icon_selected.png";
          break;
      }
      return imgsrc;
    }

    // set repeat name
    $scope.setSpaceNewName = function (name) {
      var count = -1;
      for (var i in $scope.spaceList) {
        var spaceName = $scope.spaceList[i].Name;
        var spaceNames = spaceName.split("(");
        var realName = spaceNames[0];
        if (realName == name) {
          if (spaceNames.length > 1) {
            var countTmp = spaceNames[1].split(")")[0];
            count = parseInt(count) > parseInt(countTmp) ? count : countTmp;
          } else {
            count = count == -1 ? 0 : count;
          }
        }
      }
      count++;
      return count == 0 ? name : name + "(" + count + ")";
    };

    $scope.locationGoto = function (url) {
      $location.path(url);
    }

    // *********************************************************************
    // public click function

    $scope.Operate = function (action, Url) {
//      //        $scope.CreateSpaceList(action, Url);
//      switch (action.toLowerCase()) {
//        case "permits":
//          $location.path("/#/Intake");
//          break;
//        case "inspections":
//          break;
//        case "People":
//        case "locations":
//          break;
//        default:
//          break;
//      }
    };


    $scope.SetCurrentToEnd = function (ID, Nowindex) {
//
//      var selectedspace = $filter("filter")($scope.spaceList, function (item) {
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

    $scope.clickrouting = function (ID, routingurl, spaceType) {
//      $rootScope.SpaceSelectedId = ID;
//
//      $scope.setimgcss(ID, spaceType);
//
//      if (routingurl == $location.path()) {
//        if (spaceType.toLowerCase() == "new" || spaceType.toLowerCase() == "search") {
//
//          SpaceService.GetFilter($rootScope.SpaceSelectedId, function (data) {
//            if (data.result.length < 1) {
//              $route.reload();
//            } else {
//              if (data.result.length > 0) {
//                var searchData = JSON.parse(data.result[0].Conditions);
//                $rootScope.$broadcast("SpaceAutoSearch", searchData);
//              }
//            }
//          });
//        }
//      } else {
//        $location.path(routingurl);
//      }
    };

    $scope.dblclick = function (ID, Name) {
//      $("#" + ID).hide();
//      $("#textarea_" + ID).show();
//      $("#textarea_" + ID).trigger("focus");
    };


//    $rootScope.$on("GetFilter", function () {
//      $scope.getSpaceFilter();
//    });

    // new click function
    $scope.changeUrl = function (action) {
//      switch (action) {
//        case "spaceNew":
//          var name = $scope.setSpaceNewName("Untitled Space");
//          var url = "/SpaceNew";
//          var type = "new";
//          SpaceService.Create(name, url, type, function (data) {
//            $scope.GetSpaceList(function () {
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

    // update space name
    $scope.UpdateSpaceList = function (ID, URL) {
//      LoadingService.show();
//      var Name = document.getElementById("textarea_" + ID).value;
//      Name = $.trim(Name);
//      if (Name == "") {
//        $scope.GetSpaceList();
//        return;
//      }
//
//      SpaceService.UpdateSpaceName(Name, ID, function (data) {
//        $("#" + ID).show();
//        $("#textarea_" + ID).hide();
//        $scope.GetSpaceList();
//        LoadingService.hide();
//      });
    };

    // *********************************************************************
    // set filter function

    $scope.getSpaceFilter = function () {
//      var space = $scope.getSpaceById();
//      if (space != null && space.URL == $location.path() && space.SpaceType.toLowerCase() == "search") {
//
//        SpaceService.GetFilter(space.ID, function (data) {
//          if (data.result.length > 0) {
//            var searchData = JSON.parse(data.result[0].Conditions);
//            $rootScope.$broadcast("SpaceAutoSearch", searchData);
//          }
//        });
//      }
    };

    var calcSpacesCount = function () {
//      var navHeight = $("#big-nav").height();
//      var dashboradHeihght = $("#dashboardGroupDiv").height();
//      var settingHeight = $("#nav-last-li").height();
//      var spaceWidth = $($("#spaceGroupDiv").find("li")[0]).width();
//      var moreHeight = 30;
//
//      var liSpacesHeight = $(document).width() <= 768 ? 50 : 95;
//
//      var count = (navHeight - settingHeight - dashboradHeihght - moreHeight) / liSpacesHeight-1;
//
//      if ((count - $scope.showcount) > 1 || (count - $scope.showcount) < 0 || $scope.lastSpaceWidth != spaceWidth) {
//        $scope.showcount = Math.floor(count);
//
//        LoadingService.show();
//        SpaceService.GetSpacesList(function (data) {
//          if (data.result != 300) {
//            $safeApply($scope, function () {
//              $scope.spaceList = data.result;
//            });
//          }
//          LoadingService.hide();
//        });
//      }
//
//      $scope.lastSpaceWidth = spaceWidth;
//      resizeTimer = null;
    };
  }
})();
