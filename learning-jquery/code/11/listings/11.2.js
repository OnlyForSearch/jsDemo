$(document).ready(function() {
  $('div.member').on('mouseenter mouseleave', function(event) {
    var $image = $(this).find('img');
    /*若要避免产生不合需要的动画队列，一种方式是使用jQuery自定义的:animated选择符。在
     mouseenter/mouseleave事件处理程序中，可以使用这个选择符来检测图像，看它当前是否正
     处于动画的过程中*/
    if (!$image.is(':animated') || event.type == 'mouseleave') {
      var size = event.type == 'mouseenter' ? 85 : 75;
      var padding = event.type == 'mouseenter' ? 0 : 5;
      $image.animate({
        width: size,
        height: size,
        paddingTop: padding,
        paddingLeft: padding
      });
    }
  });
});
