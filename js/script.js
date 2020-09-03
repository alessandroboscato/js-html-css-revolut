$(".col-sm-8 li").hover(
  function() {
    $(this).find(".box_menu").removeClass("d-none")
  }, function() {
    $(this).find(".box_menu").addClass("d-none")
  }
);
