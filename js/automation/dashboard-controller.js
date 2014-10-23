(function() {
  'use strict';

  angular
    .module('accela.automation')
    .controller('DashboardController', controller);

  /**
   * @ngInject
   */
  function controller($scope, $log, CONFIG) {

    // PRIVATE data

    var vm = this;

    var mockUserResponse = {
      "status": 200,
      "result": {
        "firstName": "Ella",
        "lastName": "Cunningham",
        "serviceProviderCode": "BPTDEV",
        "department": {
          "id": "BPTDEV-BUILDING-NA-NA-NA-NA-NA",
          "serviceProviderCode": "BPTDEV",
          "group": "NA",
          "office": "NA",
          "bureau": "NA",
          "section": "NA",
          "division": "NA",
          "agency": "BUILDING",
          "text": "Building Department",
          "value": "BPTDEV/BUILDING/NA/NA/NA/NA/NA"
        },
        "fullName": "Ella Cunningham",
        "id": "ADMIN",
        "value": "ADMIN"
      }
    };

    var mockUserSpacesResponse = {
      "result": [
        {
          "ID": 6710,
          "Name": "PMT14-00124",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T15:06:29.4185884",
          "URL": "/PermitSummary/BPTDEV-DUB14-00000-000ZH",
          "SortID": 109,
          "PinSortID": 4,
          "Status": "open",
          "UpdateDate": "2014-10-23T15:06:29.4185884",
          "SpaceType": "submitPermits"
        },
        {
          "ID": 6707,
          "Name": "14EST-000114",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T15:03:04.771624",
          "URL": "/FinalizePermits/BPTDEV-14EST-00000-00697",
          "SortID": 108,
          "PinSortID": 3,
          "Status": "open",
          "UpdateDate": "2014-10-23T15:03:04.771624",
          "SpaceType": "Permits"
        },
        {
          "ID": 6742,
          "Name": "Untitled Space(2)",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T18:32:32.6694061",
          "URL": "/SpaceNew",
          "SortID": 115,
          "PinSortID": 0,
          "Status": "open",
          "UpdateDate": "2014-10-23T18:32:32.6694061",
          "SpaceType": "new"
        },
        {
          "ID": 6741,
          "Name": "Untitled Space(1)",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T18:31:21.8114196",
          "URL": "/SpaceNew",
          "SortID": 114,
          "PinSortID": 0,
          "Status": "open",
          "UpdateDate": "2014-10-23T18:31:21.8114196",
          "SpaceType": "new"
        },
        {
          "ID": 6740,
          "Name": "Untitled Space",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T18:30:58.0584196",
          "URL": "/SpaceNew",
          "SortID": 113,
          "PinSortID": 0,
          "Status": "open",
          "UpdateDate": "2014-10-23T18:30:58.0584196",
          "SpaceType": "new"
        },
        {
          "ID": 6706,
          "Name": "14EST-000110",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T14:58:33.6580864",
          "URL": "/FinalizePermits/BPTDEV-14EST-00000-00693",
          "SortID": 107,
          "PinSortID": 0,
          "Status": "open",
          "UpdateDate": "2014-10-23T14:58:33.6580864",
          "SpaceType": "Permits"
        },
        {
          "ID": 6705,
          "Name": "14EST-000115",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T14:57:48.344124",
          "URL": "/FinalizePermits/BPTDEV-14EST-00000-00698",
          "SortID": 106,
          "PinSortID": 0,
          "Status": "open",
          "UpdateDate": "2014-10-23T14:57:48.344124",
          "SpaceType": "Permits"
        },
        {
          "ID": 6702,
          "Name": "PMT14-00123",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T14:51:53.0547004",
          "URL": "/PermitSummary/BPTDEV-DUB14-00000-000ZG",
          "SortID": 105,
          "PinSortID": 0,
          "Status": "open",
          "UpdateDate": "2014-10-23T14:51:53.0547004",
          "SpaceType": "submitPermits"
        },
        {
          "ID": 6744,
          "Name": "14EST-000118",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T10:49:45.060291",
          "URL": "/FinalizePermits/BPTDEV-14EST-00000-00701",
          "SortID": 116,
          "PinSortID": 0,
          "Status": "open",
          "UpdateDate": "2014-10-23T10:49:45.060291",
          "SpaceType": "Permits"
        }
      ]
    };

    var mockClosedSpacesResponse = {
      "result": [
        {
          "ID": 6737,
          "Name": "New Application(2)_Copy(1)1",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T09:42:59.618253",
          "URL": "/Intake",
          "SortID": 112,
          "PinSortID": 0,
          "Status": "close",
          "UpdateDate": "2014-10-23T17:53:45.8946525",
          "SpaceType": "new"
        },
        {
          "ID": 6736,
          "Name": "New Application(50)_Copy(1)",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T09:42:59.618253",
          "URL": "/Intake",
          "SortID": 112,
          "PinSortID": 0,
          "Status": "close",
          "UpdateDate": "2014-10-23T17:46:30.7706525",
          "SpaceType": "new"
        },
        {
          "ID": 6697,
          "Name": "New Application(3)",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T14:32:29.1785542",
          "URL": "/Intake",
          "SortID": 102,
          "PinSortID": 0,
          "Status": "close",
          "UpdateDate": "2014-10-23T17:46:09.8996525",
          "SpaceType": "new"
        },
        {
          "ID": 6700,
          "Name": "New Application(4)",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T14:45:22.6130469",
          "URL": "/Intake",
          "SortID": 104,
          "PinSortID": 0,
          "Status": "close",
          "UpdateDate": "2014-10-23T17:46:05.7016525",
          "SpaceType": "new"
        },
        {
          "ID": 6645,
          "Name": "Untitled Space(3)",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T09:59:42.1873409",
          "URL": "/SpaceNew",
          "SortID": 83,
          "PinSortID": 0,
          "Status": "close",
          "UpdateDate": "2014-10-23T10:01:28.1803409",
          "SpaceType": "new"
        },
        {
          "ID": 6644,
          "Name": "Untitled Space(3)",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T09:59:42.1873409",
          "URL": "/SpaceNew",
          "SortID": 82,
          "PinSortID": 0,
          "Status": "close",
          "UpdateDate": "2014-10-23T10:00:20.4713409",
          "SpaceType": "new"
        },
        {
          "ID": 6692,
          "Name": "Untitled Space(1)",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T06:12:15.049792",
          "URL": "/SpaceNew",
          "SortID": 98,
          "PinSortID": 0,
          "Status": "close",
          "UpdateDate": "2014-10-23T06:12:55.2896821",
          "SpaceType": "new"
        },
        {
          "ID": 6688,
          "Name": "Untitled Space(6)",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T06:07:50.6836354",
          "URL": "/SpaceNew",
          "SortID": 96,
          "PinSortID": 0,
          "Status": "close",
          "UpdateDate": "2014-10-23T06:09:27.1959971",
          "SpaceType": "new"
        },
        {
          "ID": 6656,
          "Name": "Untitled Space(4)",
          "UserID": "ADMIN",
          "CreatedDate": "2014-10-23T10:27:21.4198043",
          "URL": "/SpaceNew",
          "SortID": 89,
          "PinSortID": 0,
          "Status": "close",
          "UpdateDate": "2014-10-23T06:09:24.0050283",
          "SpaceType": "new"
        }
      ]
    };

    var mockWorkflowTasksResponse = {
      "status": 200,
      "result": [
        {
          "dueDate": "2013-04-02 00:00:00",
          "comment": "",
          "serviceProviderCode": "BPTDEV",
          "processCode": "PMT_RES",
          "isCompleted": "N",
          "isActive": "Y",
          "description": "Electrical Review",
          "assignedDate": "2013-03-28 00:00:00",
          "dispositionNote": "",
          "id": "14-3",
          "recordId": {
            "id": "BPTDEV-DUB13-00000-00003",
            "customId": "PMT13-00001",
            "trackingId": 261800045,
            "serviceProviderCode": "BPTDEV",
            "value": "DUB13-00000-00003"
          },
          "daysDue": 5
        },
        {
          "dueDate": "2013-03-29 00:00:00",
          "comment": "",
          "serviceProviderCode": "BPTDEV",
          "processCode": "PMT_COMM",
          "isCompleted": "N",
          "isActive": "Y",
          "description": "Application Submittal",
          "assignedDate": "2013-03-28 00:00:00",
          "dispositionNote": "",
          "id": "1-2",
          "recordId": {
            "id": "BPTDEV-DUB13-00000-00004",
            "customId": "PMT13-00002",
            "trackingId": 212013792,
            "serviceProviderCode": "BPTDEV",
            "value": "DUB13-00000-00004"
          },
          "daysDue": 1
        },
        {
          "dueDate": "2013-04-14 00:00:00",
          "comment": "",
          "serviceProviderCode": "BPTDEV",
          "processCode": "NONE",
          "isCompleted": "N",
          "isActive": "Y",
          "description": "No Workflow Required",
          "assignedDate": "2013-04-14 00:00:00",
          "dispositionNote": "",
          "id": "1-12",
          "recordId": {
            "id": "BPTDEV-DUB13-00000-0001F",
            "customId": "PLN13-00001",
            "trackingId": 201978183,
            "serviceProviderCode": "BPTDEV",
            "value": "DUB13-00000-0001F"
          },
          "daysDue": 0
        },
        {
          "dueDate": "2013-04-15 00:00:00",
          "comment": "",
          "serviceProviderCode": "BPTDEV",
          "processCode": "PMT_GRADING",
          "isCompleted": "N",
          "isActive": "Y",
          "description": "Application Submittal",
          "assignedDate": "2013-04-14 00:00:00",
          "dispositionNote": "",
          "id": "1-12682",
          "recordId": {
            "id": "BPTDEV-DUB13-00000-0001E",
            "customId": "PMT13-00009",
            "trackingId": 214454019,
            "serviceProviderCode": "BPTDEV",
            "value": "DUB13-00000-0001E"
          },
          "daysDue": 1
        },
        {
          "dueDate": "2013-05-12 00:00:00",
          "comment": "",
          "serviceProviderCode": "BPTDEV",
          "processCode": "PMT_COMM",
          "isCompleted": "N",
          "isActive": "Y",
          "description": "Public Works Review",
          "assignedDate": "2013-05-07 00:00:00",
          "dispositionNote": "",
          "id": "5-2",
          "recordId": {
            "id": "BPTDEV-DUB13-00000-00006",
            "customId": "PMT13-00003",
            "trackingId": 216696723,
            "serviceProviderCode": "BPTDEV",
            "value": "DUB13-00000-00006"
          },
          "daysDue": 5
        },
        {
          "dueDate": "2013-05-12 00:00:00",
          "comment": "",
          "serviceProviderCode": "BPTDEV",
          "processCode": "PMT_COMM",
          "isCompleted": "N",
          "isActive": "Y",
          "description": "Building Review",
          "assignedDate": "2013-05-07 00:00:00",
          "dispositionNote": "",
          "id": "2-2",
          "recordId": {
            "id": "BPTDEV-DUB13-00000-00006",
            "customId": "PMT13-00003",
            "trackingId": 216696723,
            "serviceProviderCode": "BPTDEV",
            "value": "DUB13-00000-00006"
          },
          "daysDue": 5
        },
        {
          "dueDate": "2013-05-12 00:00:00",
          "comment": "",
          "serviceProviderCode": "BPTDEV",
          "processCode": "PMT_COMM",
          "isCompleted": "N",
          "isActive": "Y",
          "description": "Fire Review",
          "assignedDate": "2013-05-07 00:00:00",
          "dispositionNote": "",
          "id": "3-2",
          "recordId": {
            "id": "BPTDEV-DUB13-00000-00006",
            "customId": "PMT13-00003",
            "trackingId": 216696723,
            "serviceProviderCode": "BPTDEV",
            "value": "DUB13-00000-00006"
          },
          "daysDue": 5
        },
        {
          "dueDate": "2013-05-12 00:00:00",
          "comment": "",
          "serviceProviderCode": "BPTDEV",
          "processCode": "PMT_COMM",
          "isCompleted": "N",
          "isActive": "Y",
          "description": "Planning Review",
          "assignedDate": "2013-05-07 00:00:00",
          "dispositionNote": "",
          "id": "4-2",
          "recordId": {
            "id": "BPTDEV-DUB13-00000-00006",
            "customId": "PMT13-00003",
            "trackingId": 216696723,
            "serviceProviderCode": "BPTDEV",
            "value": "DUB13-00000-00006"
          },
          "daysDue": 5
        },
        {
          "dueDate": "2013-04-02 00:00:00",
          "comment": "",
          "serviceProviderCode": "BPTDEV",
          "processCode": "PMT_RES",
          "isCompleted": "N",
          "isActive": "Y",
          "description": "Building Review",
          "assignedDate": "2013-05-08 11:27:57",
          "dispositionNote": "",
          "id": "13-3",
          "recordId": {
            "id": "BPTDEV-DUB13-00000-00003",
            "customId": "PMT13-00001",
            "trackingId": 261800045,
            "serviceProviderCode": "BPTDEV",
            "value": "DUB13-00000-00003"
          },
          "assignedUser": {
            "value": "BPTDAILY",
            "text": "Daily User"
          },
          "daysDue": 5
        },
        {
          "dueDate": "2013-04-02 00:00:00",
          "comment": "",
          "serviceProviderCode": "BPTDEV",
          "processCode": "PMT_RES",
          "isCompleted": "N",
          "isActive": "Y",
          "description": "Zoning Review",
          "assignedDate": "2013-05-08 11:28:51",
          "dispositionNote": "",
          "id": "18-3",
          "recordId": {
            "id": "BPTDEV-DUB13-00000-00003",
            "customId": "PMT13-00001",
            "trackingId": 261800045,
            "serviceProviderCode": "BPTDEV",
            "value": "DUB13-00000-00003"
          },
          "assignedUser": {
            "value": "BPTDAILY",
            "text": "Daily User"
          },
          "daysDue": 5
        }
      ],
      "page": {
        "offset": 0,
        "total": 12,
        "limit": 10,
        "hasmore": true
      }
    };

    // PUBLIC data

    $scope.dashboard = {
      currentUser: [],
      today: new Date(),
      myTasks: {
        toggleView: "Grid",
        mockupDate: new Date(),
        orderByValue: "assignedDate",
        orderByText: "Date Assigned",
        loadingMore: "Click for More",
        limitTo: 6,
        minLength: 6,
        maxLength: 10,
        sortBy: [{
          text: 'Date Assigned',
          value: 'assignedDate'
        },
          {
            text: 'Date Due',
            value: 'dueDate'
          },
          {
            text: 'Priority',
            value: ''
          }],
        loading: false,
        toggleLoading: function () {
          if ($scope.dashboard.myTasks.limitTo == 6) {
            $scope.dashboard.myTasks.limitTo = 10;
            $scope.dashboard.myTasks.loadingMore = "Click for Less";
          } else {
            $scope.dashboard.myTasks.limitTo = 6;
            $scope.dashboard.myTasks.loadingMore = "Click for More";
          }
        }
      },
      activity: {
        //toggleView: "Watch",
        //Mockup data
        list: [{
          type: 'address',
          title: 'Address change',
          description: '2633 Camino Ramon, San Ramon, CA, 94583',
          permitId: 'BLD-12345',
          date: '06/20/14 at 12:32 PM'
        }, {
          type: 'people',
          title: 'Applicant updated email',
          description: 'j.stevenson@urabuilder.com',
          permitId: 'COM-00098',
          date: '06/20/14 at 11:59 AM'
        }, {
          type: 'workflow',
          title: 'New ad hoc workflow added',
          description: 'Demolition Plan Review',
          permitId: 'COM12-23861',
          date: '06/20/14 at 11:00 AM'
        }, {
          type: 'comments',
          title: 'Comments added',
          description: 'Owner did not change minimum distributions',
          permitId: 'PMT-00023',
          date: '06/20/14 at 01:50 AM'
        }, {
          type: 'email',
          title: 'Email sent to',
          description: 'Owner, Architect',
          permitId: 'COM-00123',
          date: '06/20/14 at 12:00 PM'
        }, {
          type: 'locked',
          title: 'Conditional lock applied',
          description: 'Stop work order',
          permitId: 'BLD-76294',
          date: '06/20/14 at 11:59 AM'
        }, {
          type: 'address',
          title: 'Address change',
          description: '2633 Camino Ramon, San Ramon, CA, 94583',
          permitId: 'BLD-12345',
          date: '06/20/14 at 08:29 AM'
        }, {
          type: 'address',
          title: 'Address change',
          description: '2633 Camino Ramon, San Ramon, CA, 94583',
          permitId: 'BLD-12345',
          date: '06/20/14 at 11:59 AM'
        }, {
          type: 'address',
          title: 'Address change',
          description: '2633 Camino Ramon, San Ramon, CA, 94583',
          permitId: 'BLD-12345',
          date: '06/20/14 at 11:59 AM'
        }, {
          type: 'address',
          title: 'Address change',
          description: '2633 Camino Ramon, San Ramon, CA, 94583',
          permitId: 'BLD-12345',
          date: '06/20/14 at 11:59 AM'
        }, {
          type: 'address',
          title: 'Address change',
          description: '2633 Camino Ramon, San Ramon, CA, 94583',
          permitId: 'BLD-12345',
          date: '06/20/14 at 11:59 AM'
        }, {
          type: 'address',
          title: 'Address change',
          description: '2633 Camino Ramon, San Ramon, CA, 94583',
          permitId: 'BLD-12345',
          date: '06/20/14 at 11:59 AM'
        }],
        limitTo: 9,
        loadingMore: "Loading More..."
      },
      userSpaces: [],
      search: {
        text: ""
      }
    };

    $scope.newSpaceLoading = false;

    $scope.getCurrentUser = function () {
      $scope.dashboard.currentUser = mockUserResponse.result;
    };

    $scope.getCurrentUser();

    $scope.myTasks = [];

    $scope.getMyTasks = function () {
      $scope.myTasks = mockWorkflowTasksResponse.result;
      $scope.dashboard.myTasks.showMore = $scope.myTasks.length > $scope.dashboard.myTasks.limitTo ? true : false;
    };

    $scope.getMyTasks();

    $scope.toggleMyTasksOrderBy = function (sort) {
      $scope.dashboard.myTasks.orderByValue = sort.value;
      $scope.dashboard.myTasks.orderByText = sort.text;
    }

    //get closed user spaces
    $scope.getSpaceList = function () {
      $scope.newSpaceLoading = true;
      $scope.dashboard.userSpaces = [];
      $scope.dashboard.userSpaces = mockClosedSpacesResponse.result;
      $scope.newSpaceLoading = false;
    };

    $scope.getSpaceList();
    $scope.deleteUserSpace = function (space) {};
    $scope.reopenSpace = function (space) {};

    $scope.globalSearch = function () {};

    $scope.toggleActivityLimitTo = function () {
      if ($scope.dashboard.activity.limitTo == 9) {
        $scope.dashboard.activity.loadingMore = "Loading Less...";
        $scope.dashboard.activity.limitTo = 20;
      } else {
        $scope.dashboard.activity.loadingMore = "Loading More...";
        $scope.dashboard.activity.limitTo = 9;
      }
    };

    // set image by arno
    $scope.setImage = function (spaceType) {
      spaceType = spaceType == null ? "null" : spaceType;
      var imgsrc = "untitled_icon_selected.png";
      switch (spaceType.toLowerCase()) {
        case "permits":
        case "submitpermits":
          imgsrc = "permits_icon_selected.png";
          break;
        case "people":
          imgsrc = "people_icon_selected.png";
          break;
        case "search":
          imgsrc = "search_icon_selected.png";
          break;
        default:
          imgsrc = "untitled_icon_selected.png";
          break;
      }
      return imgsrc;
    };

    // PUBLIC methods


    // CONSTRUCTOR

    activate();

    // PRIVATE methods

    function activate() {
      $log = $log.getInstance('DASHBOARD-CONTROLLER');
    }
  }
})();
