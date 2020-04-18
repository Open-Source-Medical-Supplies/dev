/* eslint-disable no-unused-expressions */
!(function ($) {
  "use strict";

  if (!$) {
    console.warn('jQuery is undefined');
    return;
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function (e) {
    var self = e.target;
    if (
      location.pathname.replace(/^\//, "") === self.pathname.replace(/^\//, "") &&
      location.hostname === self.hostname
    ) {
      e.preventDefault();
      var goToAnchor = $(self.hash);
      if (goToAnchor.length) {
        var scrollTo = goToAnchor.offset().top;

        if ($(self).attr("href") === "#header") {
          scrollTo = 0;
        } else if ($("#header").length) {
          scrollTo -= $("#header").outerHeight();
        }

        $("html, body").animate({scrollTop: scrollTo}, 1500, "easeInOutExpo");

        if ($(self).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(self).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close");
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // When page is scrolled toggle:
  // toggle .header-scrolled class to #header 
  // toggle Back to top button class
  $(window).scroll(function () {
    if($(window).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
      $(".back-to-top").fadeIn("slow");
    } else {
      $("#header").removeClass("header-scrolled");
      $(".back-to-top").fadeOut("slow");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }
})(jQuery);
