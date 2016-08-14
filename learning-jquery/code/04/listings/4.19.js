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
    $speech.animate({fontSize: num + 'px'}, 'slow');
  });

  var $firstPara = $('p').eq(1);
  $firstPara.hide();
  $('a.more').click(function(event) {
    event.preventDefault();
    $firstPara.animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 'slow');
    var $link = $(this);
    if ($link.text() == 'read more') {
      $link.text('read less');
    } else {
      $link.text('read more');
    }
  });

  $('div.label').click(function() {
    var paraWidth = $('div.speech p').outerWidth();
    var $switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher
      .css({position: 'relative'})
      .fadeTo('fast', 0.5)
      .animate({left: paraWidth - switcherWidth}, 'slow')
      .fadeTo('slow', 1.0)
      .slideUp('slow')
      .slideDown('slow');
    /*们可以按照下列顺序对<div id="switcher">上的效果进行排队。
     (1) 通过.fadeTo()将其不透明度减退为0.5。
     (2) 通过.animate()将其移动到右侧。
     (3) 通过.fadeTo()将其渐增回完全不透明。
     (4) 通过.slideUp()隐藏它。
     (5) 通过.slideDown()再将其显示出来*/
  });
});
