(function() {
  'use strict';

  /**
   * USER ACTIVITY - dependency injection handled by UserModel.
   */
  Accela.module('Entity.UserActivity', function() {

    // DEFINE class

    function UserActivity(data) {
      this.type = data.type || null;
      this.title = data.title || null;
      this.description = data.description || null;
      this.permitId = data.permitId || null;
      this.date = data.date || null;
    }

    // STATIC METHODS - assigned to class

    /**
     * Constructor for objects of this class
     */
    UserActivity.build = function (data) {
      return new UserActivity(data || {});
    };

    return UserActivity;
  });
})();
