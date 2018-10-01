$('a.nav-item').on('click', function(event) {
  // Prevent page from scrolling to incorrect div height
  event.preventDefault();
});

// TODO: Functinoalize logic so each tab does not have to be repeated
// e.g. #anchor-nav display = block, all others = none && style with anchor-navbar
$(document).ready(function() {
  $("#honeychain-nav").click(function() {
    $("#honeychain").css("display", "block");
    $("#justads").css("display", "none");
    $("#slimcity").css("display", "none");
    $("#twain").css("display", "none");

    document
      .getElementById("nav")
      .setAttribute(
        "class",
        "navbar fixed-top navbar-expand-md navbar-dark honeychain-navbar"
      );
    $("body,html").animate({
        scrollTop: 0 // Scroll to top of body
      },
      250
    );
  });

  $("#justads-nav").click(function() {
    $("#honeychain").css("display", "none");
    $("#justads").css("display", "block");
    $("#slimcity").css("display", "none");
    $("#twain").css("display", "none");

    document
      .getElementById("nav")
      .setAttribute(
        "class",
        "navbar fixed-top navbar-expand-md navbar-dark justads-navbar"
      );
    $("body,html").animate({
        scrollTop: 0 // Scroll to top of body
      },
      250
    );
  });

  $("#slimcity-nav").click(function() {
    $("#honeychain").css("display", "none");
    $("#justads").css("display", "none");
    $("#slimcity").css("display", "block");
    $("#twain").css("display", "none");

    document
      .getElementById("nav")
      .setAttribute(
        "class",
        "navbar fixed-top navbar-expand-md navbar-dark slimcity-navbar"
      );
    $("body,html").animate({
        scrollTop: 0 // Scroll to top of body
      },
      250
    );
  });

  $("#twain-nav").click(function() {
    $("#honeychain").css("display", "none");
    $("#justads").css("display", "none");
    $("#slimcity").css("display", "none");
    $("#twain").css("display", "block");

    document
      .getElementById("nav")
      .setAttribute(
        "class",
        "navbar fixed-top navbar-expand-md navbar-dark twain-navbar"
      );
    $("body,html").animate({
        scrollTop: 0 // Scroll to top of body
      },
      250
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
  function(event) {
    event.preventDefault()
    var currenthash = window.location.hash;
    $("body,html").animate({
        scrollTop: 0 // Scroll to top of body
      },
      0
    );
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