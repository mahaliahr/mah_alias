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

  // media panel
  $('.media-toggle').on('click', function(e){
    e.stopPropagation();
    var $btn = $(this);
    var $panel = $btn.siblings('.media-panel');
    var open = $panel.hasClass('show');
    $panel.toggleClass('show', !open).attr('hidden', open);
    $btn.attr('aria-expanded', String(!open));
  });

  // stop clicks inside panel from closing it
  $('.media-panel').on('click', function(e){ e.stopPropagation(); });

  // close panel when clicking elsewhere
  $(document).on('click', function(){
    $('.media-panel').removeClass('show').attr('hidden', true);
    $('.media-toggle').attr('aria-expanded', 'false');
  });
});