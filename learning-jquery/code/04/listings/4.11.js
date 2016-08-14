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

  var $firstPara = $('p').eq(1);/*首先缓存选择符以避免重复遍历DOM*/
  $firstPara.hide();
  $('a.more').click(function(event) {
    event.preventDefault();
    if ($firstPara.is(':hidden')) {
      $firstPara.fadeIn('slow');
      $(this).text('read less');/*为检测和修改元素中包含的文本，这里使用了.text()方法*/
    } else {
      $firstPara.fadeOut('slow');
      $(this).text('read more');
    }
  });
});
