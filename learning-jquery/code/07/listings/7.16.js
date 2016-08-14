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
  }).button({
    icons: {primary: 'ui-icon-pause'}
  }).appendTo($controls);
  $('<button>Resume</button>').click(function(event) {
    event.preventDefault();
    var $paused = $('ul:paused');
    if ($paused.length) {
      $paused.cycle('resume');
      $.cookie('cyclePaused', null);
    }
    else {
      $(this).effect('shake', {
        distance: 10
      });
    }
  }).button({
    icons: {primary: 'ui-icon-play'}
  }).appendTo($controls);

  $('<div id="slider"></div>').slider({
    min: 0,
    max: $('#books li').length - 1
  }).appendTo($controls);/*就这么简单地调用.slider()，即可把一个<div>元素转换成一个滑动条部件。可以通过拖
   动或按键盘上的方向键（考虑无障碍性）来控制滑动条*/

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

  $('h1').click(function() {
    $(this).toggleClass('highlighted', 'slow', 'easeInExpo');
  });

  $books.find('.title').resizable({
    handles: 's'
  });
});
