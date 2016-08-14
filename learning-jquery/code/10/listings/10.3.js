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

  $('div.photo').hover(function() {/*来我们要实现的功能，就是在用户鼠标移动到照片上的时候显示照片的详细信息*/
    $(this).find('.details').fadeTo('fast', 0.7);
  }, function() {
    $(this).find('.details').fadeOut('fast');
  });
});
