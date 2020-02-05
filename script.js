$(function() {
  $(".menu__toggle").click(function() {
    $(".menu__items").toggleClass("menu__items--display");
    $(this)
      .find("a")
      .html("<i class='fas fa-bars'></i>");

    if ($(".menu__items").hasClass("menu__items--display")) {
      $(this)
        .find("a")
        .html("<i class='fas fa-times'></i>");
    }
  });
});
