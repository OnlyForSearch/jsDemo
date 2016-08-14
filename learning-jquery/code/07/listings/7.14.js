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
/*要为页面中所有的按钮添加上述外观和行为极其简单*/
  $('button').button();
});
