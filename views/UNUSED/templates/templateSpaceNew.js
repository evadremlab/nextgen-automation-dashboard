<script type="text/ng-template" id="templateSpaceNew.html">
  <nav class="navbar navbar-default text-left navbar-group" role="navigation">
    <div class="collapse navbar-collapse navbar-search-form" id="bs-example-navbar-collapse-1">
      <form class="navbar-form navbar-left navbar-search-form" role="search" xxx-ng-controller="PermitsSearchController">
        <div class="form-group">
          <ul class="nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle navbar-form-group" data-toggle="dropdown"><b class="caret navbar-caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#">Permits</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="form-group">
          <input type="text" class="form-control navbar-form-control" xxx-ng-model="searchkey" placeholder="I'm looking for...">
            <i class="icon-search navbar-search-button" xxx-ng-click="PermitsSearch(searchkey)"></i>
          </div>
        </form>
      </div><!-- /.navbar-collapse -->
    </nav>
    <ul class="nav nav-pillsbottom" id="myTab">
      <li class="active"><a href="javascript:void(0)#home" data-toggle="tab">List</a></li>
      <li><a href="javascript:void(0)#profile" data-toggle="tab">Assignments</a></li>
      <li><a href="javascript:void(0)#profile1" data-toggle="tab">Recent</a></li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade in active" id="home">
        <table class="table table-hover table-layout-auto">
          <tr>
            <td>
              <ul class="list-unstyled">
                <li><a href="#/Permits" class="btnclose" id="Permits" ng-click="operate('Permits','/Permits');">Permits</a></li>
                <li>23 total &nbsp;&nbsp; 4 updated</li>
              </ul>
            </td>
            <td class="text-right">
              <button type="button" ng-click="locationGoto('/Intake')" class="btnclose btn btn-default btn-sm">
                <span class="glyphicon glyphicon-plus"></span> Create
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <ul class="list-unstyled">
                <li><a href="#/Inspections" class="btnclose" id="Inspections" ng-click="operate('Inspections','/Inspections');">Inspections</a></li>
                <li>12 total &nbsp;&nbsp; 6 updated</li>
              </ul>
            </td>
            <td class="text-right" xxx-ng-controller="CreateNewCtrl">
              <button type="button" class="btn btn-default btn-sm" ng-click="OpenCreateModal();">
                <span class="glyphicon glyphicon-plus"></span> Create
              </button>
              <div xxx-ng-include="'/AppViews/Inspector/CreateNew.html'" class="text-left"></div>
              <div xxx-ng-include="'/AppViews/Inspector/LookUpPermitID.html'" class="text-left"></div>
            </td>
          </tr>
          <tr>
            <td>
              <ul class="list-unstyled">
                <li><a class="btnclose" id="People" ng-click="operate('People','/People');">People</a></li>
                <li>12 total &nbsp;&nbsp; 2 updated</li>
              </ul>
            </td>
            <td class="text-right">
              <button type="button" class="btn btn-default btn-sm">
                <span class=" glyphicon glyphicon-plus">
                </span> Create
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <ul class="list-unstyled">
                <li><a class="btnclose" id="Locations" ng-click="operate('Locations','/Locations');">Locations</a></li>
                <li>45 total &nbsp;&nbsp; 41 updated</li>
              </ul>
            </td>
            <td class="text-right">
              <button type="button" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-plus"></span> Create
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div class="tab-pane fade" id="profile">
        <table class="table table-hover table-layout-auto">
          <tr>
            <td>
              <ul class="list-unstyled">
                <li><a>Plans Distribution</a></li>
                <li>Routed for Review</li>
              </ul>
            </td>
            <td class="text-right">
              <span class="glyphicon glyphicon-time"> </span>1h
            </td>
          </tr>
          <tr>
            <td>
              <ul class="list-unstyled">
                <li><a>Building Review</a></li>
                <li>In Process</li>
              </ul>
            </td>
            <td class="text-right">
              <span class="glyphicon glyphicon-time"> </span>3h
            </td>
          </tr>
          <tr>
            <td>
              <ul class="list-unstyled">
                <li><a>Permit Issuance</a></li>
                <li>Scheduled</li>
              </ul>
            </td>
            <td class="text-right">
              <span class="glyphicon glyphicon-time"> </span>11h
            </td>
          </tr>
        </table>
      </div>
      <div class="tab-pane fade" id="profile1">
        <table class="table table-hover table-layout-auto">
          <tr>
            <td>
              <ul class="list-unstyled">
                <li><a>BLD-000031</a></li>
                <li>Residential Pool</li>
              </ul>
            </td>
            <td class="text-right">
              <ul class="list-unstyled">
                <li><span>Modified</span></li>
                <li>Today at 12:58 PM</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <ul class="list-unstyled">
                <li><a>COM-00012</a></li>
                <li>Residential Pool</li>
              </ul>
            </td>
            <td class="text-right">
              <ul class="list-unstyled">
                <li><span>Modified</span></li>
                <li>Today at 11:58 PM</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <ul class="list-unstyled">
                <li><a>BLD-000027</a></li>
                <li>Residential Pool</li>
              </ul>
            </td>
            <td class="text-right">
              <ul class="list-unstyled">
                <li><span>Modified</span></li>
                <li>Today at 10:58 PM</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </script>
