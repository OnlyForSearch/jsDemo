(function($) {
  $(document).on('mouseenter mouseleave', 'div.photo', function(event) {
    var $details = $(this).find('.details');
    if (event.type == 'mouseenter') {
      $details.fadeTo('fast', 0.7);
    } else {
      $details.fadeOut('fast');
    }
  });

  $(document).on('nextPage', function(event, scrollToVisible) {/*下面我们就来实际地看一看自定义事件参数。为此，可以给代码清单10-10中的nextPage事 件增加一个选项，通过它来指定是否向下滚动以显示新添加的内容*/
    var url = $('#more-photos').attr('href');
    if (url) {
      $.get(url, function(data) {
        var $data = $(data).appendTo('#gallery');
        /*我们已经给事件回调函数添加了scrollToVisible参数。这个参数的值指定了是否执行新
         的功能，即测量新内容的位置并滚动到该位置。测量只要使用.offset()方法即可，这个方法返
         回新内容的top和left坐标。要向下滚动页面，调用.scrollTop()方法。*/
        if (scrollToVisible) {
          var newTop = $data.offset().top;
          $(window).scrollTop(newTop);
        }
        checkScrollPosition();
      });
    }
  });

  var pageNum = 1;
  $(document).on('nextPage', function() {
    pageNum++;
    if (pageNum < 20) {
      $('#more-photos').attr('href', 'pages/' + pageNum + '.html');
    }
    else {
      $('#more-photos').remove();
    }
  });

  function checkScrollPosition() {
    var distance = $(window).scrollTop() + $(window).height();
    if ($('#container').height() <= distance) {
      $(document).trigger('nextPage');
    }
  }

  $(document).ready(function() {
    $('#more-photos').click(function(event) {
      event.preventDefault();
      $(this).trigger('nextPage');
    });

    $(window).scroll(checkScrollPosition).trigger('scroll');
  });
})(jQuery);
