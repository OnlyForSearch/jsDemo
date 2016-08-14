$(document).ready(function() {
  $('div.member').on('mouseenter mouseleave', function(event) {
    var size = event.type == 'mouseenter' ? 85 : 75;
    var padding = event.type == 'mouseenter' ? 0 : 5;
    $(this).find('img').stop().animate({/*.stop()，它能在动画运行过程中让动画立即停止。*/
      width: size,
      height: size,
      paddingTop: padding,
      paddingLeft: padding
    });
  });
});
