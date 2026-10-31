/* Tirupati Express - enquiry forms that send via WhatsApp (no backend needed) */
jQuery(document).ready(function ($) {
  $(".wa-form").on("submit", function (e) {
    e.preventDefault();

    var lines = [];
    var page = document.title || "Tirupati Express Services";

    $(this).find("[data-label]").each(function () {
      var val = $(this).val();
      if (val && String(val).trim().length) {
        lines.push($(this).attr("data-label") + ": " + String(val).trim());
      }
    });

    if (!lines.length) {
      alert("Please fill in at least your name and phone number.");
      return;
    }

    var text = "Hi Tirupati Express, I would like a quote. (" + page + ")\n" + lines.join("\n");
    window.open("https://wa.me/917801087921?text=" + encodeURIComponent(text), "_blank");
  });
});
