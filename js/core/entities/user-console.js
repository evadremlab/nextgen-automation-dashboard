(function() {
  'use strict';

  /**
   * USER CONSOLE - dependency injection handled by ConsoleModel.
   */
  Accela.module('Entity.UserConsole', function(ConsolePage, _) {

    // PRIVATE data

    var propertyMap = [];

    // DEFINE class

    function UserConsole(data) {
      // "consoles" service returns "console_nbr"
      // "userConsole" service returns "id"
      this.id = '' + (data.console_nbr || ''); // convert to string
      this.title = data.console_name || '';
      this.description = data.console_desc || '';
      this.pages = [];

      if ((/BPTDEV/).test(this.id)) {
        this.id = this.id.replace('BPTDEV.', '').replace('.CONSOLE', '');
      }

      this.addPages(data);
    }

    // PROTOTYPE METHODS -- assigned to instances of this class

    /**
     * Add multiple instances of the ConsolePage class.
     */
    UserConsole.prototype.addPages = function (data) {
      if (data.pages) {
        _.each(data.pages, this.addPage, this);
      }

      return this;
    };

    /**
     * Add an instance of the ConsolePage class.
     */
    UserConsole.prototype.addPage = function (data) {
      this.pages.push(ConsolePage.build(data));
    };

    /**
     * Replace internal properties with those expected by the server.
     * "map()" is an underscore mixin, defined in /shared/services/underscore.js
     */
    UserConsole.prototype.map = function() {
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
    UserConsole.build = function (data) {
      return new UserConsole(data || {});
    };

    return UserConsole;

  });
})();
