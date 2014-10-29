(function() {
  'use strict';

  /**
   * USER SPACE - dependency injection handled by UserModel.
   */
  Accela.module('Entity.UserSpace', function() {

    // DEFINE class

    function UserSpace(data) {
      this.ID = data.ID || '';
      this.Name = data.Name || '';
      this.CreatedDate = data.CreatedDate ? moment(data.CreatedDate) : null;
      this.URL = data.URL || '';
      this.SortID = data.SortID || null;
      this.PinSortID = data.PinSortID || null;
      this.Status = data.Status || '';
      this.UpdateDate = data.UpdateDate ? moment(data.UpdateDate) : null;
      this.SpaceType = data.SpaceType || '';
    }

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

