$(document).ready(function() {
  var $books = $('#books').cycle({
    timeout: 2000,
    speed: 200,
    pause: true
  });
  /*例如，
   Cookie插件（https://github.com/carhartl/jquery-cookie）提供了读写页面中cookie值的接口。而这个
   功能是通过$.cookie()函数提供的，这个函数可以取得或设置个别的cookie值。*/
  if ( $.cookie('cyclePaused') ) {/*检查名为cyclePaused的cookie是否存在*/
    $books.cycle('pause');
  }
  var $controls = $('<div id="books-controls"></div>').insertAfter($books);
  $('<button>Pause</button>').click(function(event) {
    event.preventDefault();
    $books.cycle('pause');
  }).appendTo($controls);
  $('<button>Resume</button>').click(function(event) {
    event.preventDefault();
    $('ul:paused').cycle('resume');
  }).appendTo($controls);
});
