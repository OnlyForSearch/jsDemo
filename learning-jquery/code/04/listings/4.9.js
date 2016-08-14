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
    event.preventDefault();
    $('p').eq(1).fadeIn('slow');/*如果想在显
     示整个段落时，只是逐渐地增大其不透明度，那么可以使用.fadeIn('slow')方法，*/
    $(this).hide();
  });
});
