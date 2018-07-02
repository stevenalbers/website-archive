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
  });
});