$(document).ready(function() {
  var $speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');
  $('#switcher button').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    switch (this.id) {
      case 'switcher-large':
        num *= 1.4;
        break;
      case 'switcher-small':
        num /= 1.4;
        break;
      default:
        num = parseFloat(defaultSize);
    }
    $speech.css('fontSize', num + 'px');
  });

  $('p').eq(1).hide();
  $('a.more').click(function(event) {
    event.preventDefault();/*.preventDefault()来避免链接的默认操作，*/
    $('p').eq(1).show();/*.hide()和.show()方法简单实用，但它们没有那么花哨。为了增添更多的艺术感，我
     们可以为它们指定速度。*/
    $(this).hide();
  });
});
