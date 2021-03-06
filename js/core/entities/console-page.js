(function() {
  'use strict';

  /**
   * CONSOLE PAGE - dependency injection handled by ConsoleModel.
   */
  Accela.module('Entity.ConsolePage', function(Portlet, _) {

    // PRIVATE data

    var uuid = 0; // so we can find a page if the id/title was changed

    var propertyMap = ['uuid:REMOVE', 'isNew:REMOVE', 'originalId:REMOVE'];

    // DEFINE class

    function ConsolePage(data) {
      this.id = data.id || '';
      this.title = data.title || '';
      this.description = data.description || '';
      this.layout = data.layout || 'one-column';
      this.portlets = [];

      // meta properties
      this.uuid = uuid++;
      this.isNew = data.id ? false : true;
      this.originalId = this.id; // used for the edit page title

      if (data.portlets) {
        _.each(data.portlets, this.addPortlet, this);
      }
    }

    // PROTOTYPE METHODS -- assigned to instances of this class

    /**
     * Add an instance of the Portlet class.
     */
    ConsolePage.prototype.addPortlet = function (data) {
      this.portlets.push(Portlet.build(data));
    };

    /**
     * Replace internal properties with those expected by the server.
     * "map()" is an underscore mixin, defined in /js/core/underscore-wrapper.js
     */
    ConsolePage.prototype.map = function() {
      _(this).mapProperties(propertyMap);

      _.each(this.portlets, function(portlet) {
        portlet.map();
      });

      return this;
    };

    // STATIC METHODS - assigned to class

    /**
     * Constructor for objects of this class
     */
    ConsolePage.build = function (data) {
      return new ConsolePage(data || {});
    };

    return ConsolePage;
  });
})();
