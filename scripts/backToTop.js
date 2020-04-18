/* eslint-disable no-unused-expressions */
!(function ($) {
  "use strict";

  if (!$) {
    console.warn('jQuery is undefined');
    return;
  }

  // register back to top button functionality
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);
