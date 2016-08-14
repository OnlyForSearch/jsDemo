$(document).ready(function() {
  var $speech = $('div.speech');
  $('#switcher-large').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    num *= 1.4;
    $speech.css('fontSize', num + 'px');/*我们要
     在每次按钮被单击时把字号增大40%。为此，可以将num乘以1.4，然后再连接num和'px'来设置
     字体大小*/
  });
});
