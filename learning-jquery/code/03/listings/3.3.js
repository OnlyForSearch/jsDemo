$(document).ready(function() {
  $('#switcher-default')
      .addClass('selected')
      .on('click', function() {
        $('body').removeClass('narrow');
        $('body').removeClass('large');
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');//关键字this引用都是携带相应行为的DOM元素,
      });
  $('#switcher-narrow').on('click', function() {
    $('body').addClass('narrow');
    $('body').removeClass('large');
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');/*$()函数传递DOM元素,也是为了更方便地引用DOM元素this转换为jquery对象*/
  });
  $('#switcher-large').on('click', function() {
    $('body').removeClass('narrow');
    $('body').addClass('large');
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
