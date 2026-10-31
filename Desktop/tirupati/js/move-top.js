/* Tirupati Express - Scroll to top (UItoTop) */
(function ($) {
  $.fn.UItoTop = function (options) {
    var settings = $.extend({ easingType: "easeOutQuart" }, options);

    var $btn = $(
      '<a href="#head" id="toTop" class="scroll" style="display: none;" aria-label="Back to top">' +
      '<span id="toTopHover"></span></a>'
    );
    $("body").append($btn);

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        $btn.fadeIn(300);
      } else {
        $btn.fadeOut(300);
      }
    });

    $btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 800, settings.easingType);
    });

    return this;
  };
})(jQuery);
