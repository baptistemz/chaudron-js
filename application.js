$(document).ready(function() {
  // compteur

  var $aiguille = $('#aiguille'),
  $body = $(document.body),
  bodyHeight = $body.height();

  $(window).on('scroll',function(){
      $aiguille.css( "transform", "rotate("+ $(window).scrollTop() /3 +"deg)" );
  });


  // gps

  var $pointer = $('#pointer'),
  $body = $(document.body),
  bodyHeight = $body.height();

  $(window).scroll(function () {
    $pointer.css({
      'transform': 'translate(' + ($body.scrollTop()/15) + 'px,-' + ($body.scrollTop()/15) + 'px)'
    });
  });

  // maintenance

  var angle = 0;
  setInterval(function(){
    angle+=0.05;
    $("#wheel").css({
      'transform': 'rotate(' + angle + 'deg)'
    });
  },1);

  // team pictures

  $(".fa").on('mouseenter', function() {
    doBounce($(this), 2, '4px', 150);
  });

  function doBounce(element, times, size, speed) {
    for(var i = 0; i < times; i++) {
      element.animate({'font-size': '+='+ size}, speed)
      .animate({'font-size': '-='+size}, speed);
    }
  }
});
