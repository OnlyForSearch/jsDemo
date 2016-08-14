$(document).ready(function() {//改善代码
  $('#switcher-default')
  .addClass('selected')
  .on('click', function() {
    $('body').removeClass();//removeClass()省略参数时候会移除元素中所有的类
  });
  $('#switcher-narrow').on('click', function() {
    $('body').removeClass().addClass('narrow');
  });
  $('#switcher-large').on('click', function() {
    $('body').removeClass().addClass('large');
  });

  $('#switcher button').on('click', function() {
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
