(function() {
  'use strict';

  /**
   * PORTLET - dependency injection handled by ConsoleModel.
   */
  Accela.module('Entity.Portlet', function(CONFIG, _) {

    // PRIVATE data

    var propertyMap = ['url:source', 'display:REMOVE'];

    // DEFINE class

    function Portlet(data) {
      this.entryName = data.entryName || (data.id || ''); // "V360 Service Requests Portlet"
      this.title = data.title || '';                      // "Service Requests:en$$服务申请:zh$$طلبات الخدمة:ar$$طلبات الخدمة(Service Requests):de"
      this.description = data.description || '';          // "V360 Service Requests Portlet"
      this.name = data.name || '';                        // "servicerequest"
      this.url = data.url || (data.source || '');         // "/portlets/commons/cap/myCAPDetailPortlet.jsp?module=ServiceRequest"
      this.height = data.height || null;                  // "645"
      this.width = data.width || '100%';                  // "100%"
      this.scrolling = data.scrolling || 'yes';           // "no"
      this.category = data.category || null;              // "V360"
      this.mediaType = data.mediaType || 'html';          // "html"

      // Dave's custom fields
      this.display = data.display || 'full';              // for "two-column" layout
      this.onload = data.onload || null;                  // javascript method called when iframe is loaded
    }

    // PROTOTYPE METHODS -- assigned to instances of this class

    /**
     * Mock url is used to test without needing to load an actual page.
     */
    Portlet.prototype.getUrl = function() {
      return CONFIG.USE_MOCK_PORTLETS ? 'mock-portlet.html' : this.url;
    };

    /**
     * Extract English language title.
     */
    Portlet.prototype.localizedTitle = function() {
      return this.title.split('$$')[0].split(':')[0];
    };

    /**
     * Replace internal properties with those expected by the server.
     * "map()" is an underscore mixin, defined in /js/core/underscore-wrapper.js
     */
    Portlet.prototype.map = function() {
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
    Portlet.build = function (data) {
      return new Portlet(data || {});
    };

    return Portlet;
  });
})();
