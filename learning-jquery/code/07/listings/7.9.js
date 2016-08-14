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
    $.cookie('cyclePaused', 'y');
  }).appendTo($controls);
  $('<button>Resume</button>').click(function(event) {
    event.preventDefault();
    $('ul:paused').cycle('resume');
    $.cookie('cyclePaused', null);
  }).appendTo($controls);

  $books.hover(function() {
    $books.find('.title').animate({
      backgroundColor: '#eee',
      color: '#000'
    }, 1000);
  }, function() {
    $books.find('.title').animate({
      backgroundColor: '#000',
      color: '#fff'
    }, 1000);
  });
/*
* 再单击页面的标题就会给它添加或删除hightlighted
 类。因为这里指定的速度是slow，所以最终的颜色、边框和外边距都会以动画形式慢慢地呈现，
 而不是一下子就应用这些样式,三个操作CSS类的方法： .addClass()、 .removeClass()和.toggleClass()。
 这三个方法在jQuery UI中经过扩展，都可以*/
  $('h1').click(function() {
    $(this).toggleClass('highlighted', 'slow');
  });
});
