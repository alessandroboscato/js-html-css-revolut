$(".col-sm-8 li").hover(
  function() {
    $(this).next("box_menu").removeClass("d-none");
  }
);
