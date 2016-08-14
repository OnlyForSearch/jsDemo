$(document).ready(function() {
  $('#switcher').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

$(document).ready(function() {
  $('#switcher-default').addClass('selected');

  $('#switcher').on('click', 'button', function() {
    var bodyClass = event.target.id.split('-')[1];

    $('body').removeClass().addClass(bodyClass);

    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
/*虽然这个例子的代码显得稍微复杂了一点，但随着带有事件处理程序的元素数量增多，使用
 事件委托终究还是正确的技术。此外，通过组合两个click事件处理程序并使用基于.is()测试
 的if-else语句，可以减少重复的代码*/