$(document).ready(function () {
  $(".fav-button").click(function () {
    if ($(this).hasClass("filled")) {
      $(this).removeClass("filled");
    } else {
      $(this).addClass("filled");
    }
  });
});
