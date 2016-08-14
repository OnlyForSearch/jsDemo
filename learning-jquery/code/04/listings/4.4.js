$(document).ready(function() {
  var $speech = $('div.speech');
  $('#switcher button').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    if (this.id == 'switcher-large') {
      num *= 1.4;
    } else if (this.id == 'switcher-small') {
      num /= 1.4;
    }
    $speech.css('fontSize', num + 'px');/*要通过单击Smaller按钮减小字体大小，应该使用除法而不是乘法，即num /= 1.4。*/
  });
});
