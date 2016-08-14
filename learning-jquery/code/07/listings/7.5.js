$(document).ready(function() {
  var $books = $('#books').cycle({
    timeout: 2000,
    speed: 200,
    pause: true
  });
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
/*假设页面中有多组幻灯片，我们想通过Resume按钮恢复页面中所有暂停的幻灯片。那就需
 要找到页面中所有被暂停的幻灯片所在的<ul>元素，然后全部恢复。利用Cycle自定义的:paused
 选择符，可以轻松地实现这个功能*/
