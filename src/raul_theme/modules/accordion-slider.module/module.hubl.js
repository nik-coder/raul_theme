
$(function(){
  var $acc = $('.ra-accordion');
  $acc.on('click', '.acc-head', function(){
    var $item = $(this).closest('.acc-item');
    var $body = $item.find('.acc-body');
    // close siblings
    $item.siblings('.acc-item').removeClass('open').find('.acc-body').slideUp(200);
    // toggle current
    $item.toggleClass('open');
    $body.stop(true,true).slideToggle(220);
  });
});
