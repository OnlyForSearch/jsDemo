$(document).ready(function() {
  var $books = $('#books').cycle({
    timeout: 2000,
    speed: 200,
    pause: true
  });
  if ( $.cookie('cyclePaused') ) {
    $books.cycle('pause');
  }
  var $controls = $('<div id="books-controls"></div>').insertAfter($books);
  $('<button>Pause</button>').click(function(event) {
    event.preventDefault();
    $books.cycle('pause');
    $.cookie('cyclePaused', 'y');/*设置cookie就和 取得cookie的值一样简单，只要传递一个字符串作为第二个参数即可*/
  }).appendTo($controls);
  $('<button>Resume</button>').click(function(event) {
    event.preventDefault();
    $('ul:paused').cycle('resume');
    $.cookie('cyclePaused', null);/*而在单击Resume按钮时，通过传递null将这个cookie删除*/
  }).appendTo($controls);
});
