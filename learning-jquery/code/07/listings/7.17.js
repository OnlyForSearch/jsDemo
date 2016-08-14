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

  /*了响应滑动条的值的变化，可以绑定一个由滑动条触发的自定义事件。这个事件名为
   slide，虽然它不是原生JavaScript事件，但在jQuery代码中，它就像是原生事件一样。而且，监
   听这种事件也不用显式地调用.on()，只要把事件处理程序传递给.slider()方法即可*/
  $('<div id="slider"></div>').slider({
    min: 0,
    max: $('#books li').length - 1,
    slide: function(event, ui) {
      $books.cycle(ui.value);
    }
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

  $('h1').click(function() {
    $(this).toggleClass('highlighted', 'slow', 'easeInExpo');
  });

  $books.find('.title').resizable({
    handles: 's'
  });
});
