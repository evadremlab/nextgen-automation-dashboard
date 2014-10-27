(function() {
  'use strict';

  /**
   * USER SPACE - dependency injection handled by UserModel.
   */
  Accela.module('Entity.UserSpace', function(CONFIG, _) {

    // PRIVATE data

    var propertyMap = [];

    // DEFINE class

    function UserSpace(data) {
      this.ID = data.ID || '';                              // "New Application"
      this.Name = data.Name || '';                          // "ADMIN"
      this.CreatedDate = moment(data.CreatedDate || null);  // "2014-10-23T09:42:59.618253"
      this.URL = data.URL || '';                            // "/Intake"
      this.SortID = data.SortID || null;                    // 112
      this.PinSortID = data.PinSortID || null;              // 0
      this.Status = data.Status || '';                      // "close"
      this.UpdateDate = moment(data.UpdateDate || '');      // "2014-10-23T17:53:45.8946525"
      this.SpaceType = data.SpaceType || '';                // "new"
    }

    // PROTOTYPE METHODS -- assigned to instances of this class

    /**
     * Replace internal properties with those expected by the server.
     * "map()" is an underscore mixin, defined in /js/core/underscore-wrapper.js
     */
    UserSpace.prototype.map = function() {
      _(this).mapProperties(propertyMap);

      _.each(this.pages, function(page) {
        page.map();
      });

      return this;
    };

    // STATIC METHODS - assigned to class

    /**
     * Constructor for objects of this class
     */
    UserSpace.build = function (data) {
      return new UserSpace(data || {});
    };

    return UserSpace;
  });
})();

