$(window).on("load", function () {
  $(".preloader").fadeOut("slow");
});
switch (window.location.hash.substring(1)) {
  case "about":
    window.location = "about";
    break;
}
$(document).ready(function () {
  //Navbar Shrink
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });
  // Video Popup
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "")
        $("#player-1").attr("src", videoSrc);
    }
  });

  // Feature Carousel
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Screenshots Carousel
  $(".screenshots-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  // Testimonial Carousel
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // Team Carousel
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  //For Scrolling Scroll It
  $.scrollIt({
    topOffset: -50,
  });

  // Navbar Collapse
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  //For Theme switch icon
  function toggleTheme() {
    if (localStorage.getItem("theme") !== null) {
      if (localStorage.getItem("theme") !== "dark") {
        $("body").removeClass("dark");
      } else {
        $("body").addClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();
  $(".toggle-theme").on("click", function () {
    if ($("body").hasClass("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    updateIcon();
  });
  function updateIcon() {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
      $("body").removeClass("dark");
    } else {
      if ($("body").hasClass("dark")) {
        $(".toggle-theme i").removeClass("fa-moon");
        $(".toggle-theme i").addClass("fa-sun");
        $("body").removeClass("dark");
      } else {
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
        $("body").addClass("dark");
      }
    }
  }
});
