/**
 * from Permit Solution - Accela.RBUI\Scripts\App\Directives\BsPopoverDirective.js
 */

"use strict";

angular
  .module('accela.core')
  .directive("bsPopover", ["$compile", "$templateCache","$safeApply",
  function ($compile, $templateCache, $safeApply) {
    return {

      link: function (scope, element, attrs) {
        var template = attrs.template;
        var type = "click";
        if (attrs.triggertype != undefined) {
          type = attrs.triggertype;
        }
        var ua = navigator.userAgent,
          type = (ua.match(/iPad/i)) ? "touchstart" : type;
        element.find("[data-toggle=popover]").popover({
          html: true,
          trigger: "manual",
          placement: attrs.placement ? attrs.placement : 'right',
          content: function () {
            var htmlcontent = "";
            if (attrs.more) {
              var space = scope.spaceList;
              var showcount = scope.showcount;
              htmlcontent += "<div class=\"space-right-menu-group\">";
              for (var i = 0; i < space.length; i++) {
                if (i > showcount) {
                  htmlcontent += "<div><a id=\"spaceMore_" + space[i].ID + "\" href=\"/#" + space[i].URL + "\" id=\"" + space[i].ID + "\" ng-click=\"SetCurrentToEnd(" + space[i].ID + "," + i + ");\"  class=\"btnclose list-group-item no-border space-right-menu space-right-menu-more\">" + space[i].Name + "</a></div>\n";
                }
              }
              htmlcontent += "</div>";
            }
            else if (attrs.pin) {
              var PinText = "";
              var closeDisplay = "block";
              if (attrs.pinsortid!=0) {
                PinText = "Unpin";
                closeDisplay = "none";
              }
              else {
                PinText = "Pin";
              }
              var quickAddDisplay = "none";
              if (attrs.spacetype == "submitPermits") {
                quickAddDisplay = "block";
              }

              htmlcontent += "<div class=\"space-right-menu-group\">";
              htmlcontent += "<a href=\"javascript:void(0)\" id='" + PinText + "_{{space.ID}}'  ng-click=\"SpaceAction('" + PinText + "',space.ID);\" class=\"btnclose list-group-item no-border space-right-menu\" >" + PinText + "</a>";
              htmlcontent += "<a href=\"javascript:void(0)\" id='Duplicate_{{space.ID}}' ng-click=\"SpaceAction('Duplicate',space.ID);\" class=\"btnclose list-group-item no-border space-right-menu\">Duplicate</a>";
              // htmlcontent += "<span loading ng-show=\"NewSpaceCloseing\" style=\"display:none;\"></span>";
              htmlcontent += "<a href=\"javascript:void(0)\" id='rename_{{space.ID}}' ng-click=\"dblclick(space.ID,space.Name);\" class=\"btnclose list-group-item no-border space-right-menu\">Rename</a>";
              htmlcontent += "<a href=\"javascript:void(0)\" id='qucikAdd_{{space.ID}}' ng-click=\"SpaceAction('quickadd',space.ID);\" class=\"btnclose list-group-item no-border space-right-menu\" style=\" display:" + quickAddDisplay + "; \">Quick Add</a>";
              htmlcontent += "<a href=\"javascript:void(0)\" id='Close_{{space.ID}}' ng-click=\"SpaceAction('Close',space.ID);\" class=\"btnclose list-group-item no-border space-right-menu\" style=\"display:"+closeDisplay+";\">Close</a>";
              htmlcontent += "</div>";
            }
            else {
              htmlcontent = $templateCache.get(template);
            }

            return $compile(htmlcontent)(scope);
          }
        }).on(type, function () {// //mouseenter;
          var _this = this;

          $(_this).popover("show");
          $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
          });

          //      scope.reposition($(this));
          $('#' + 'clickPopover').click();
          $(".btnclose").on("click", function () {
            $(_this).popover('hide');
          });
          if (attrs.arrowclass) {
            $(".arrow").addClass(attrs.arrowclass);
            $(".arrow").removeClass("arrow");
          }
        }).on("mouseleave", function () {
          var _this = this;

          setTimeout(function () {
            if (!$(".popover:hover").length) {
              $(_this).popover('hide');
            }
          }, 200);
        });
        scope.show = function (_this) {
          _this.popover("show");
          //    scope.reposition(_this);
        }

        scope.reposition = function (_this) {
          var popoverObj = $('.popover');
          popoverObj.resize(function () {
            if (!_this || !_this.height() || _this.height() == 0) { return; }
            var placement = attrs.placement ? attrs.placement : 'right';
            var windowHeight = $(window).height();
            var windowWidth = $(window).width();
            var left = 0, top = 0;
            switch (placement) {
              case "left":
                break;
              case "right":
                top = _this.offset().top + _this.height() / 2 - popoverObj.height() / 2;
                left = _this.offset().left + _this.width();
                //if (_this.hasClass("isfixed")) {
                //    top += _this.scrollTop();
                //}
                break;
              case "top":
                break;
              case "bottom":
                break;
              default: break;
            }
//            console.log(_this.height());
//            console.log(popoverObj.height());
//            console.log(_this.offset().top);
            popoverObj.animate({ "left": left, "top": top }, { speed: 1500, easing: "swing", queue: false });
          });
        }
      }
    };
  }]);

var ua = navigator.userAgent,
  event = (ua.match(/iPad/i)) ? "touchstart" : "click";

$(document).on(event, function (e) {
  $('[data-toggle="popover"]').each(function () {
    //the 'is' for buttons that trigger popups
    //the 'has' for icons within a button that triggers a popup !$(this).is(e.target) && $(this).has(e.target).length === 0 &&
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');

    }
  });
});

//resize of div
(function ($, h, c) {
  var a = $([]),
    e = $.resize = $.extend($.resize, {}),
    i,
    k = "setTimeout",
    j = "resize",
    d = j + "-special-event",
    b = "delay",
    f = "throttleWindow";
  e[b] = 20;
  e[f] = true;
  $.event.special[j] = {
    setup: function () {
      if (!e[f] && this[k]) {
        return false;
      }
      var l = $(this);
      a = a.add(l);
      $.data(this, d, {
        w: l.width(),
        h: l.height()
      });
      if (a.length === 1) {
        g();
      }
    },
    teardown: function () {
      if (!e[f] && this[k]) {
        return false;
      }
      var l = $(this);
      a = a.not(l);
      l.removeData(d);
      if (!a.length) {
        clearTimeout(i);
      }
    },
    add: function (l) {
      if (!e[f] && this[k]) {
        return false;
      }
      var n;
      function m(s, o, p) {
        var q = $(this),
          r = $.data(this, d);
        r.w = o !== c ? o : q.width();
        r.h = p !== c ? p : q.height();
        n.apply(this, arguments);
      }
      if ($.isFunction(l)) {
        n = l;
        return m;
      } else {
        n = l.handler;
        l.handler = m;
      }
    }
  };
  function g() {

    i = h[k](function () {
        a.each(function () {
          var n = $(this),
            m = n.width(),
            l = n.height(),
            o = $.data(this, d);
          if (m !== o.w || l !== o.h) {
            n.trigger(j, [o.w = m, o.h = l]);
          }
        });
        g();
      },
      e[b]);
  }
})(jQuery, this);