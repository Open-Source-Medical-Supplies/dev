/* eslint-disable no-unused-expressions */
!(function ($) {
  "use strict";

  if (!$) {
    console.warn('jQuery is undefined');
    return;
  }

  // init animate on scroll lib
  if (window.AOS) {
    window.AOS.init({ duration: 1000, easing: "ease-in-out-back" });
  }
  
  // Set sticky on the header
  $("#header").sticky({ topSpacing: 0, zIndex: "50" });

})(jQuery);
