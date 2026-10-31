/* Tirupati Express - jQuery easing (minimal) */
(function ($) {
  var easeOutQuart = function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  };
  var easeInOutQuad = function (x, t, b, c, d) {
    return (t /= d / 2) < 1 ? (c / 2) * t * t + b : (-c / 2) * (--t * (t - 2) - 1) + b;
  };
  var easeOutCubic = function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  };

  $.easing = $.easing || {};
  $.extend($.easing, {
    easeOutQuart: easeOutQuart,
    easeInOutQuad: easeInOutQuad,
    easeOutCubic: easeOutCubic
  });
})(jQuery);
