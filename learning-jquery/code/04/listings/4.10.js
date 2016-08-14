$(document).ready(function() {
  var $speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');
  $('#switcher button').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    switch (this.id) {
      case 'switcher-large':
        num *= 1.4;
        break;
      case 'switcher-small':
        num /= 1.4;
        break;
      default:
        num = parseFloat(defaultSize);
    }
    $speech.css('fontSize', num + 'px');
  });

  $('p').eq(1).hide();
  $('a.more').click(function(event) {
    event.preventDefault();
    $('p').eq(1).slideDown('slow');/*使用jQuery的.slideDown()和.slideUp()方法通常是正确的选择。这两个动画方法
     仅 改 变 元 素 的 高 度 。 要 让 段 落 以 垂 直 滑 入 的 效 果 出 现 ， 可 以 像 代 码 清 单 4-10 这 样 调
     用.slideDown('slow')。*/
    $(this).hide();
  });
});
