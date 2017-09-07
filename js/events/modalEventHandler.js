$(function(){
  $(document).on("click", "#btn-modal", function(){
    canvasEnabled = false;
  });

  $(document).on('hidden.bs.modal', '#myModal', function () {
      canvasEnabled = true;
      $("#modal").html("");
  });
});
