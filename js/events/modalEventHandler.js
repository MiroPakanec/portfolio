$(function(){
  $(document).on("click", "#btn-modal", function(){
    canvasEnabled = false;
  });

  $(document).on('hidden.bs.modal', '#myModal', function () {

      canvasEnabled = true;
      $("#modal").html("");
  });

  $(document).on("click", ".expand-image", function(){

    var src = $(".slick-current").find("img").attr("src");
    $('#imagepreview').attr('src', src);
    $('#imagemodal').modal('show');
  });

  $(document).on("click", ".btn-prev", function(){

    $("#myModal").find(".slick-prev").trigger("click");
    var src = $(".slick-active").find("img").attr("src");

    if(src == null) return;
    $('#imagepreview').attr('src', src);
  });

  $(document).on("click", ".btn-next", function(){

    $("#myModal").find(".slick-next").trigger("click");
    var src = $(".slick-active").find("img").attr("src");

    if(src == null) return;
    $('#imagepreview').attr('src', src);
  });
});
