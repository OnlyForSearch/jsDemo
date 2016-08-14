(function($) {
  $(document).on('mouseenter mouseleave', 'div.photo', function(event) {
    var $details = $(this).find('.details');
    if (event.type == 'mouseenter') {
      $details.fadeTo('fast', 0.7);
    } else {
      $details.fadeOut('fast');
    }
  });

  $(document).on('nextPage', function() {/*现在的.click()处理程序的工作只剩下很少了。在触发自定义事件后，通过调
   用.preventDefault()，它又阻止了默认的行为。大部分工作量都转移到了针对nextPage事
   件的新的事件处理程序中了*/
    var url = $('#more-photos').attr('href');
    if (url) {/*单击More Photos链接会导致追
     加下一组照片，同时更新链接的href属性，如图10-3所示。*/
      $.get(url, function(data) {
        $('#gallery').append(data);
      });
    }
  });

  var pageNum = 1;
  $(document).on('nextPage', function() {/*现在的.click()处理程序的工作只剩下很少了。在触发自定义事件后，通过调
   用.preventDefault()，它又阻止了默认的行为。大部分工作量都转移到了针对nextPage事
   件的新的事件处理程序中了*/
    pageNum++;
    if (pageNum < 20) {
      $('#more-photos').attr('href', 'pages/' + pageNum + '.html');
    }
    else {
      $('#more-photos').remove();
    }
  });

  $(document).ready(function() {
    $('#more-photos').click(function(event) {
      event.preventDefault();
      $(this).trigger('nextPage');//自定义事件调用
    });
  });
})(jQuery);
