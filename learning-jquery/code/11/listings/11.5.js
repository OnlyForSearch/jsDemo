/*看看 $.fx.speeds对象，就知道字符串'slow'和'fast'分别对应着600毫秒和200毫秒。每次调用一
 个动画方法*/
/*(1) 检测$.fx.off是否为true。如果是则持续时间为0。
 (2) 检测传入的持续时间是否为数值；如果是，则将持续时间设置为该毫秒数。
 (3) 检测传入的持续时间是否与$.fx.speeds的某个属性键匹配。如果是，则将持续时间设
 置为该属性的值。
 (4) 如果前面检测未发现传入持续时间参数，则将持续时间设置为$.fx.speeds._default
 的值。*/
/*我们就定义了一个新的更快的默认速度，*/
$.fx.speeds._default = 250;

$(document).ready(function() {
  $('#fx-toggle').show().on('click', function() {/*原来隐藏的按钮显示在了介绍性文字与之后的照片之间，*/
    $.fx.off = !$.fx.off;
  });

  $('div.member').on('mouseenter mouseleave', function(event) {
    var size = event.type == 'mouseenter' ? 85 : 75;
    var padding = event.type == 'mouseenter' ? 0 : 5;
    $(this).find('img').stop().animate({
      width: size,
      height: size,
      paddingTop: padding,
      paddingLeft: padding
    });
  });
});
