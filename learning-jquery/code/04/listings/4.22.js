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
      .animate({
        left: paraWidth - switcherWidth
      }, {
        duration: 'slow',
        queue: false
      })
      .fadeTo('slow', 1.0)
      .slideUp('slow')
      .queue(function(next) {/*像这样传递一个回调函数， .queue()方法就可以把该函数添加到相应元素的效果队列中。
       在这个函数内部，我们把背景颜色设置为红色，然后又调用了next()方法，其返回的结果将作
       为参数传给回调函数。添加的这个next ()方法可以让队列在中断的地方再接续起来，然后再与
       后续的.slideDown ('slow')连缀在一起。如果在此不使用next()方法，动画就会中断*/
        $switcher.css({backgroundColor: '#f00'});
        next();
      })
      .slideDown('slow');
  });
});
