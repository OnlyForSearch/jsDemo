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


    /*代码清单10-11中实现的无穷滚动功能的主要问题是性能。尽管代码并不复杂，但checkScrollPosition()函数却需要计算页面和窗口的大小。由于某些浏览器中的scroll事件会在 窗口滚动期间重复触发，因此计算过程会不断累积。最终结果就是导致页面忽急忽缓、反应迟顿。 浏览器中有几个原生事件都会频繁触发。最常见的事件有scroll、 resize和mousemove。 为了解决这个问题，就需要节流事件。这个技术会限制一些无谓的计算，即不是每次事件发生都计算，而是选择在部分事件发生时计算
     我 们 没 有 直 接 将 checkScrollPosition() 设 置 为 scroll 事 件 处 理 程 序 ， 而 是 使 用
     JavaScript的setTimeout函数，延迟250毫秒再调用它。更重要的是，我们会在执行任何代码之
     前先检查当前运行的计时器。因为检查一个简单变量的值速度极快，所以对事件处理程序的大多
     数调用都几乎能够立即返回。而对checkScrollPosition()函数的调用只会在计时器结束时才
     会发生，通常每次都要等250毫秒。
     通过给setTimeout()设置一个合理的值，就能够在即时返馈与较高性能之间达成一个合理
     的折中
    * */
    var timer = 0;
    $(window).scroll(function() {
      if (!timer) {
        timer = setTimeout(function() {
          checkScrollPosition();
          timer = 0;
        }, 250);//设置节流方案,避免不必要的计算
      }
    }).trigger('scroll');
  });
})(jQuery);
