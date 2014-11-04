/*
 author:Nicol Xiang
 Create Date: 2014 03 14
 Modified by: dbalmer 10/23/14
 */
(function() {
  'use strict';

  angular
    .module('accela.core')
    .filter('customDateFilter', function ($filter) {
      return function (originDate, formatString) {
        var formatDate = null;
        if (originDate instanceof Date) {
          formatDate = originDate;
        } else {
          if (originDate) {
            formatDate = new Date(originDate.toString().replace(/-/g, '/'));
          }
        }
        return formatDate === null ? '' : $filter('date')(formatDate, formatString);
      };
  });
})();
