$(document).ready(function() {

  $(".col-sm-8 li").hover(
    function() {
      $(this).find(".box_menu").removeClass("d-none")
    }, function() {
      $(this).find(".box_menu").addClass("d-none")
    }
  );

  $("li").hover(
    function() {
      $(this).css("color", "black")
    }, function() {
      $(this).css("color", "#C3C7CA")
    }
  );
});
