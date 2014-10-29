(function() {
  'use strict';

  /**
   * WORKFLOW TASK - dependency injection handled by UserModel.
   */
  Accela.module('Entity.UserWorkflowTask', function() {

    // DEFINE class

    function UserWorkflowTask(data) {
      this.dueDate = data.dueDate || null;
      this.comment = data.comment || null;
      this.serviceProviderCode = data.serviceProviderCode || null;
      this.processCode = data.processCode || null;
      this.isCompleted = data.isCompleted || null;
      this.isActive = data.isActive || null;
      this.description = data.description || null;
      this.assignedDate = data.assignedDate || null;
      this.dispositionNote = data.dispositionNote || null;
      this.id = data.id || null;
      this.recordId = {
        id: data.recordId.id || null,
        customId: data.recordId.customId || null,
        trackingId: data.recordId.trackingId || null,
        serviceProviderCode: data.recordId.serviceProviderCode || null,
        value: data.recordId.value || null
      };
      this.daysDue = data.daysDue || null;
    }

    // STATIC METHODS - assigned to class

    /**
     * Constructor for objects of this class
     */
    UserWorkflowTask.build = function (data) {
      return new UserWorkflowTask(data || {});
    };

    return UserWorkflowTask;
  });
})();
