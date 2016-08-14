/*就像多个不同的事件处理程序可以响应相同事件一样，相同的事件也可以通过多种不同的方式
 来触发。为了演示这一点，我们接下来会给页面添加一个无穷滚动功能。所谓无穷滚动，是一种让
 用户控制滚动条来加载内容的流行技术，即当到达目前加载的内容底部时，就会自动取得新内容。
 我们先从一个简单实现开始，然后在后续的例子中逐步改进它。这个例子的基本思想就是监
 听scroll（滚动）事件，在发生滚动事件时测量当前滚动条的位置，必要时就加载新的内容。
 下列代码会触发代码清单10-10中定义的nextPage事件。*/


(function($) {
  $(document).on('mouseenter mouseleave', 'div.photo', function(event) {
    var $details = $(this).find('.details');
    if (event.type == 'mouseenter') {
      $details.fadeTo('fast', 0.7);
    } else {
      $details.fadeOut('fast');
    }
  });

  $(document).on('nextPage', function() {
    var url = $('#more-photos').attr('href');
    if (url) {
      $.get(url, function(data) {
        $('#gallery').append(data);
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

    /*新的checkScrollPosition()函数在这里作为window的scroll事件处理程序。它会
     计算从文档的顶部到窗口底部的距离，然后用这个距离与文档中主容器的高度进行比较。只要这
     两个值一相等，就需要使用额外的照片来填充页面，因此就触发nextPage事件。*/
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
/*接下来绑定scroll处理程序，并通过调用.scroll()方法立即触发它。这样就开始了整个
 过程，如果此时页面中还没有照片，就会发出一个Ajax请求*/
    $(window).scroll(checkScrollPosition).trigger('scroll');
  });
})(jQuery);
