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

  $('h1').click(function() {
    $(this).toggleClass('highlighted', 'slow', 'easeInExpo');/*高级缓动函数可以改变加速或减速曲线，以产生与众不同的结果。例如， easeInExpo函数
     会让动画速度以指数方式加快，最终的动画速度要数倍于开始时的速度。在任何核心jQuery动画
     方法或jQuery UI效果方法中，都可以指定自定义的缓动函数。具体指定方式根据使用的语法不同，
     可能是添加一个参数，也可能是为选项对象中添加一个选项*/
  });
});
