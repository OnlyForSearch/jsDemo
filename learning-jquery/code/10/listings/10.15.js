(function($) {
  $(document).on('mouseenter mouseleave', 'div.photo', function(event) {
    var $details = $(this).find('.details');
    if (event.type == 'mouseenter') {
      $details.fadeTo('fast', 0.7);
    } else {
      $details.fadeOut('fast');
    }
  });

  $(document).on('nextPage', function(event, scrollToVisible) {
    var url = $('#more-photos').attr('href');
    if (url) {
      $.get(url, function(data) {
        var $data = $(data).appendTo('#gallery');
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
      $(this).trigger('nextPage', [true]);
    });

    var scrolled = false;
    $(window).scroll(function() {
      scrolled = true;
    });
    /*这个轮询式的方案会调用JavaScript的setInterval()函数，每
     250毫秒检查一次scrolled变量的状态。不管什么时候发生滚动事件， scrolled都会被设置
     为true，以确保在下一次轮询时调用checkScrollPosition()*/
    setInterval(function() {
      if (scrolled) {
        checkScrollPosition();
        scrolled = false;
      }
    }, 250);
    checkScrollPosition();
  });
})(jQuery);
