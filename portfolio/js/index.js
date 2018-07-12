$(document).ready(function() {
  $("#honeychain-nav").click(function() {
    $("#honeychain").css("display", "block");
    $("#tomteller").css("display", "none");
    $("#slimcity").css("display", "none");

    document
      .getElementById("nav")
      .setAttribute(
        "class",
        "navbar fixed-top navbar-expand-md navbar-dark honeychain-navbar"
      );
    $("body,html").animate(
      {
        scrollTop: 0 // Scroll to top of body
      },
      500
    );
  });

  $("#tomteller-nav").click(function() {
    $("#honeychain").css("display", "none");
    $("#tomteller").css("display", "block");
    $("#slimcity").css("display", "none");

    document
      .getElementById("nav")
      .setAttribute(
        "class",
        "navbar fixed-top navbar-expand-md navbar-dark tomteller-navbar"
      );
    $("body,html").animate(
      {
        scrollTop: 0 // Scroll to top of body
      },
      500
    );
  });

  $("#slimcity-nav").click(function() {
    $("#honeychain").css("display", "none");
    $("#tomteller").css("display", "none");
    $("#slimcity").css("display", "block");

    document
      .getElementById("nav")
      .setAttribute(
        "class",
        "navbar fixed-top navbar-expand-md navbar-dark slimcity-navbar"
      );
    $("body,html").animate(
      {
        scrollTop: 0 // Scroll to top of body
      },
      500
    );
  });
});

$("#nav .navbar-nav a").on("click", function() {
  $("#nav .navbar-nav")
    .find("li.active")
    .removeClass("active");
  $(this)
    .parent("li")
    .addClass("active");
});

window.addEventListener(
  "load",
  function() {
    var currenthash = window.location.hash;
    var navbar = currenthash.substring(1) + "-navbar";
    $(currenthash).css("display", "block");
    document
      .getElementById("nav")
      .setAttribute(
        "class",
        "navbar fixed-top navbar-expand-md navbar-dark " + navbar
      );
  },
  false
);