

(function ($) {
  "use strict";

  
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });
  
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
  
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74,
  });

  
  const navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  // Collapse now if page is not at top
  navbarCollapse();

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    
    // Get form values
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();
    const message = $("#message").val().trim();
    
    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all required fields (Name, Email, and Message).");
      return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    alert("Thank you for your message! I'll get back to you soon.");
    
    // Reset form
    this.reset();
    
    return false;
  });

  
  const animateOnScroll = function () {
    $(".project-card, .fa-stack").each(function () {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();
      
      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass("animated");
      }
    });
  };
  
  $(window).scroll(animateOnScroll);
  animateOnScroll(); 
  
  $("<style>")
    .prop("type", "text/css")
    .html(`
      .project-card, .fa-stack {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .project-card.animated, .fa-stack.animated {
        opacity: 1;
        transform: translateY(0);
      }
    `)
    .appendTo("head");

  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }
  
  const sections = $("section");
  const navLinks = $(".navbar-nav .nav-link");
  
  $(window).scroll(function () {
    let current = "";
    
    sections.each(function () {
      const sectionTop = $(this).offset().top;
      const sectionHeight = $(this).height();
      
      if ($(window).scrollTop() >= sectionTop - 200) {
        current = $(this).attr("id");
      }
    });
    
    navLinks.each(function () {
      $(this).removeClass("active");
      if ($(this).attr("href") === "#" + current) {
        $(this).addClass("active");
      }
    });
  });

  
  /*
  $(window).on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });
  */

  
  // Add button dynamically
  $("body").append('<button id="backToTop" title="Go to top"><i class="fas fa-chevron-up"></i></button>');
  
  // Style the button
  $("<style>")
    .prop("type", "text/css")
    .html(`
      #backToTop {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 99;
        border: none;
        outline: none;
        background-color: #fed136;
        color: white;
        cursor: pointer;
        padding: 15px;
        border-radius: 50%;
        font-size: 18px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
      #backToTop:hover {
        background-color: #fec810;
        transform: translateY(-3px);
      }
      #backToTop.show {
        opacity: 1;
        visibility: visible;
      }
    `)
    .appendTo("head");
  
  // Show/hide button based on scroll position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#backToTop").addClass("show");
    } else {
      $("#backToTop").removeClass("show");
    }
  });
  
  // Scroll to top when button is clicked
  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800, "easeInOutExpo");
    return false;
  });

  
  console.log(
    "%cWelcome to Malika Ulanovna's Portfolio!",
    "color: #fed136; font-size: 20px; font-weight: bold;"
  );
  console.log(
    "%cInterested in collaboration? Let's connect!",
    "color: #6c757d; font-size: 14px;"
  );

})(jQuery);
