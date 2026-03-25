
$(document).ready(function () {
  // sticky navbar animation
  $(".js--section-about-us").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  $(".js--scroll-to-contact").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-contact").offset().top },
      500
    );
  });

  $(".js--scroll-to-specials").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-specials").offset().top },
      500
    );
  });

  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

  // Mobile navigation toggle
  $(".js--nav-icon").click(function () {
    const nav = $(".js--main-nav");
    const icon = $(".js--nav-icon i");
    const btn = $(".js--nav-icon");
    const expanded = btn.attr("aria-expanded") === "true";

    nav.slideToggle(200);
    btn.attr("aria-expanded", !expanded);

    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-bars");
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-times");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".js--back-to-top").addClass("visible");
    } else {
      $(".js--back-to-top").removeClass("visible");
    }
  });

  $(".js--back-to-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // Contact form validation
  $(".contact-form").submit(function (e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const $messages = $("#form-messages");

    if (!name || !email) {
      $messages
        .text("Please fill in your name and email address.")
        .removeClass("success")
        .addClass("error")
        .show();
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $messages
        .text("Please enter a valid email address.")
        .removeClass("success")
        .addClass("error")
        .show();
      return;
    }

    // Simulate successful submission
    $messages
      .text(
        "Thank you, " +
          name +
          "! We received your message and will be in touch soon."
      )
      .removeClass("error")
      .addClass("success")
      .show();

    $(this)[0].reset();
  });
});
