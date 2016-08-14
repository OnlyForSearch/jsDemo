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

  var $firstPara = $('p').eq(1);
  $firstPara.hide();
  $('a.more').click(function(event) {
    event.preventDefault();
    $firstPara.slideToggle('slow');/*另一个复合方法是.slideToggle()，该方法通过
     逐渐增加或减少元素高度来显示或隐藏元素。*/
    var $link = $(this);/*为不重复$(this)，我们把它保存在了$link变量中。同样，条件语句检查的是链接的文本
     而非第二个段落的可见性，因为我们只利用它来修改文本。*/
    if ($link.text() == 'read more') {
      $link.text('read less');
    } else {
      $link.text('read more');
    }
  });
});
