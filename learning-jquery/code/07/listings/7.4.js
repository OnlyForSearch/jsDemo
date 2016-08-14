$(document).ready(function() {
  var $books = $('#books').cycle({
    timeout: 2000,
    speed: 200,
    pause: true
  });
  var $controls = $('<div id="books-controls"></div>').insertAfter($books);
  $('<button>Pause</button>').click(function(event) {
    event.preventDefault();
    $books.cycle('pause');/*.cycle('pause')和可以暂停和*/
  }).appendTo($controls);
  $('<button>Resume</button>').click(function(event) {
    event.preventDefault();
    $books.cycle('resume');/*.cycle('resume')恢复播放*/
  }).appendTo($controls);
});
