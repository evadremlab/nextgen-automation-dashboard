(function() {
  'use strict';

  angular
    .module('accela.automation')
    .controller('DashboardController', controller);

  /**
   * @ngInject
   */
  function controller($scope, $filter, $log, UserManager, _) {

    // PRIVATE data

    // PUBLIC data

    $scope.fubar = 'tbd';

    $scope.myTasks = [];

    $scope.newSpaceLoading = false;

    $scope.dashboard = {
      activity: {
        limitTo: 2, // was 9,
        list: [],
        loadingMore: 'Loading More...'
      },
      currentUser: [],
      myTasks: {
        limitTo: 2, // was 6,
        loading: false,
        loadingMore: 'Click for More',
        maxLength: 10,
        minLength: 6,
        orderByText: 'Date Assigned',
        orderByValue: 'assignedDate',
        sortBy: [
          { text: 'Record ID', value: 'recordId.customId' },
          { text: 'Date Assigned', value: 'assignedDate' },
          { text: 'Date Due', value: 'dueDate' },
          { text: 'Priority', value: '' }
        ],
        toggleLoading: function () {
          if ($scope.dashboard.myTasks.limitTo === 6) {
            $scope.dashboard.myTasks.limitTo = 10;
            $scope.dashboard.myTasks.loadingMore = 'Click for Less';
          } else {
            $scope.dashboard.myTasks.limitTo = 6;
            $scope.dashboard.myTasks.loadingMore = 'Click for More';
          }
        },
        toggleView: 'Grid'
      },
      search: {
        text: ''
      },
      today: new Date(),
      userSpaces: [],
      weather: {
        high: 80,
        low: 52,
        outlook: 'Fair'
      }
    };

    // PUBLIC methods

    $scope.getCurrentUser = function () {
//      UserService.Init().then(function (d) {
//        $scope.dashboard.currentUser = UserService.user;
//      }, function (e) {
//      });

      UserManager.getUserProfile().then(function(data) {
        $scope.dashboard.currentUser = data;
      });
    };

    $scope.getCurrentUser();

//    setInterval(function () {
//      $safeApply($scope, function () {
//        $scope.dashboard.today = new Date();
//      });
//    }, 60000);

    $scope.getMyTasks = function () {
//      LoadingService.show();
//      DashboardService.getMyWorkflowTasks('en', 0, 10).then(function (data) {
//        if (data) {
//          $scope.myTasks = data;
//
//          $scope.dashboard.myTasks.showMore = $scope.myTasks.length > $scope.dashboard.myTasks.limitTo ? true : false;
//
//          $.each($scope.myTasks, function (item, value) {
//            permitSDK.get(value.recordId.id, function (data) {
//              $safeApply($scope, function () {
//                $scope.myTasks[item].permitType = data.type.text;
//                $scope.myTasks[item].projectName = data.name;
//              });
//            });
//          })
//        };
//
//        LoadingService.hide();
//
//      }, function (error) {
//        alertTipService.show('Danger', error.message);
//        LoadingService.hide();
//      });

      var recordDetail = Accela.Utils.XmlHttp.getMockData('mock-api/dashboard/records-BPTDEV-DUB13-00000-00003.json').content[0];

      var myTasks = [];
      //var myTasks = Accela.Utils.XmlHttp.getMockData('mock-api/dashboard/getWorkflowTasks.json').content;

//      _.each(myTasks, function(item, value) {
//        item.permitType = data.type.text;
//        item.projectName = data.name;
//        item.statusDate = data.statusDate;
//        item.assignedUser = { text: 'Dave' };
//      });

//      $.each(myTasks, function (item, value) {
//        permitSDK.get(value.recordId.id, function (data) {
//          $safeApply($scope, function () {
//            $scope.myTasks[item].permitType = data.type.text;
//            $scope.myTasks[item].projectName = data.name;
//          });
//        });
//      })

//      $scope.myTasks = myTasks;

//      $scope.dashboard.myTasks.showMore = myTasks.length > $scope.dashboard.myTasks.limitTo;

      UserManager.getWorkflowTasks().then(function(data) {

        _.each(data, function(item, value) {
          item.permitType = recordDetail.type.text;
          item.projectName = recordDetail.name;
          item.statusDate = recordDetail.statusDate;
          item.assignedUser = { text: 'Dave' };
        });

        $scope.myTasks = data;

        $scope.dashboard.myTasks.showMore = $scope.myTasks.length > $scope.dashboard.myTasks.limitTo;
      });
    };

    $scope.getMyTasks();

    $scope.toggleMyTasksOrderBy = function (sort) {
      $scope.dashboard.myTasks.orderByValue = sort.value;
      $scope.dashboard.myTasks.orderByText = sort.text;
    };

    //get closed user spaces
    $scope.getSpaceList = function () {
      $scope.newSpaceLoading = true;
      $scope.dashboard.userSpaces = [];

      UserManager.getUserClosedSpaces().then(function(data) {
        $scope.dashboard.userSpaces = data;

        _.each($scope.dashboard.userSpaces, function (v) {
          v.CreatedDate = new Date(v.CreatedDate);
          var customCreatedDate = v.CreatedDate;
          var today = new Date();
          var yesterday = new Date();
          yesterday.setDate(today.getDate() - 1);
          // TODO: use moment.js
          if (customCreatedDate.getFullYear() === today.getFullYear() && customCreatedDate.getMonth() === today.getMonth()) {
            if (customCreatedDate.getDate() === today.getDate()) {
              customCreatedDate = 'Today at ' + $filter('date')(customCreatedDate, 'h:mm a');
            } else if (customCreatedDate.getDate() === yesterday.getDate()) {
              customCreatedDate = 'Yesterday at ' + $filter('date')(customCreatedDate, 'h:mm a');
            } else {
              customCreatedDate = $filter('date')(customCreatedDate, 'MM/dd/yy h:mm a');
            }
          } else {
            customCreatedDate = $filter('date')(customCreatedDate, 'MM/dd/yy h:mm a');
          }

          v.customCreatedDate = customCreatedDate;

          v.imgsrc = setImage(v.SpaceType);
        });
      });

      $scope.newSpaceLoading = false;
    };

    $scope.getSpaceList();

    $scope.deleteUserSpace = function (index) {
        var space = $scope.dashboard.userSpaces[index];
//      SpaceService.deleteSpace(space.ID, function (data) {
//        if (data.result === 200) {
//          //console.log(angular.toJson(data));
//          $scope.getSpaceList();
//        }
//      });
      $scope.dashboard.userSpaces.splice(index, 1);
    };

    $scope.reopenSpace = function (index) {
      var space = $scope.dashboard.userSpaces[index];
//      SpaceService.reopenUserSpace(space.ID, function (data) {
//        if (data.result === 'PinFull') {
//          alertTipsController.show('Danger', 'The Pinned WorkSpace are full: can't add new space!');
//        }
//        $rootScope.$broadcast('refreshSpace');
//        if (data.result !== '300') {
//          $rootScope.$broadcast('clickSpace', data.result.ID, data.result.URL);
//        }
//      });
    };

//    $rootScope.$on('userSpaceClose', function () {
//      $scope.getSpaceList();
//    })

    $scope.globalSearch = function () {
//      if ($scope.dashboard.search.text) {
//        searchService.keyword = $scope.dashboard.search.text;
//        $location.path('/SpaceNew');
//      }
    };

    $scope.toggleActivityLimitTo = function () {
      if ($scope.dashboard.activity.limitTo === 9) {
        $scope.dashboard.activity.loadingMore = 'Loading Less...';
        $scope.dashboard.activity.limitTo = 20;
      } else {
        $scope.dashboard.activity.loadingMore = 'Loading More...';
        $scope.dashboard.activity.limitTo = 9;
      }
    };

    // CONSTRUCTOR

    activate();

    // PRIVATE methods

    function activate() {
      $log = $log.getInstance('DASHBOARD-CONTROLLER');

      UserManager.getActivityList().then(function(data) {
        $scope.dashboard.activity.list = data;
      });
    }

    function setImage(spaceType) {
      var imgsrc;
      switch ((spaceType || '').toLowerCase()) {
        case 'permits':
        case 'submitpermits':
          imgsrc = 'permits_icon_selected.png';
          break;
        case 'people':
          imgsrc = 'people_icon_selected.png';
          break;
        case 'search':
          imgsrc = 'search_icon_selected.png';
          break;
        default:
          imgsrc = 'untitled_icon_selected.png';
          break;
      }
      return imgsrc;
    }
  }
})();
