$(document).ready(function() {
  $('div.member').on('mouseenter mouseleave', function(event) {
    var size = event.type == 'mouseenter' ? 85 : 75;
    var padding = event.type == 'mouseenter' ? 0 : 5;
    /*为了修改图像的大小，我们将把其高度和宽度从75px变为85px。与此同时，为了保持图像居
     中，还要将其内边距由5px减少为0px*/
    $(this).find('img').animate({
      width: size,
      height: size,
      paddingTop: padding,
      paddingLeft: padding
    });
  });
});
