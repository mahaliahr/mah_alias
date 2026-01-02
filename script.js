$(window).on('load', function () {
  $(".trigger_popup").click(function(){
     $('.hover_bg').addClass('show');
  });
  $('.hover_bg').click(function(e){
     if (e.target === this) $(this).removeClass('show');
  });
  $('.popupCloseButton').click(function(){
     $('.hover_bg').removeClass('show');
  });
});