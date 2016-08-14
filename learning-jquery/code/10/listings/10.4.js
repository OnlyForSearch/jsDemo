$(document).ready(function() {
  var pageNum = 1;
  $('#more-photos').click(function(event) {
    event.preventDefault();
    var $link = $(this);
    var url = $link.attr('href');
    if (url) {
      $.get(url, function(data) {
        $('#gallery').append(data);
      });
      pageNum++;
      if (pageNum < 20) {
        $link.attr('href', 'pages/' + pageNum + '.html');
      }
      else {
        $link.remove();
      }
    }
  });

  $('div.photo').on('mouseenter mouseleave', function(event) {/*可以为mouseenter和mouseleave绑定同一个处理 程序，只在两个事件名称之间加一个空格即可*/
    var $details = $(this).find('.details');
    if (event.type == 'mouseenter') {//事件的类型
      $details.fadeTo('fast', 0.7);
    } else {
      $details.fadeOut('fast');
    }
  });
});
