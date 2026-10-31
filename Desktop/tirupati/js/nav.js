/* Tirupati Express - Mobile navigation toggle */
jQuery(document).ready(function ($) {
  $(".toggleMenu").on("click", function (e) {
    e.preventDefault();
    $(".nav").toggleClass("open");
  });

  // Close menu when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".h_menu4").length) {
      $(".nav").removeClass("open");
    }
  });
});
