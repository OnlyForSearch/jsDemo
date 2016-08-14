$(document).ready(function() {
  var pageNum = 1;
  $('#more-photos').click(function(event) {/*在 单击More Photos链接时，需要执行一次Ajax请求，加载下一组照片并将它们追加到<div id="gallery">*/
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
});
