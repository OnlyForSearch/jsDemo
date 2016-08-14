$(document).ready(function() {
  var $speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');/*提供一种方式能够返回字体大小的初始值当然更好了。为了做到这一点，可以在DOM
   就绪后立即把字体大小保存在一个变量中*/
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
});
