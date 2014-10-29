(function() {
  'use strict';

  /**
   * USER PROFILE - dependency injection handled by UserModel.
   */
  Accela.module('Entity.UserProfile', function() {

    // DEFINE class

    function UserProfile(data) {
      this.firstName = data.firstName || null;
      this.middleName = null;
      this.lastName = data.lastName || null;
      this.serviceProviderCode = data.serviceProviderCode || null;
      this.email = null;
      this.department = {
        "id": data.department.id || null,
        "serviceProviderCode": data.department.serviceProviderCode || null,
        "group": data.department.group || null,
        "bureau": data.department.bureau || null,
        "division": data.department.division || null,
        "section": data.department.section || null,
        "office": data.department.office || null,
        "agency": data.department.agency || null,
        "text": data.department.text || null,
        "value": data.department.value || null
      };
      this.fullName = data.fullName || null;
      this.phoneNumber = null;
      this.id = data.id || null;
      this.value = data.value || null;
      this.userID = null;
      this.gaUserID = null;
      this.cashierID = null;
      this.employeeId = null;
      this.password = null;
      this.userGroups = [
        {
          "moduleName": null,
          "id": null,
          "name": null
        }
      ];
      this.title = null;
      this.role = data.role || null; // added by Dave to replace hardcoded text
    }

    // STATIC METHODS - assigned to class

    /**
     * Constructor for objects of this class
     */
    UserProfile.build = function (data) {
      return new UserProfile(data || {});
    };

    return UserProfile;
  });
})();
