$(document).ready(function() {
  $('#switcher').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

$(document).ready(function() {
  $('#switcher-default').addClass('selected');

  $('#switcher').on('click', function(event) {
    if (!$(event.target).is('button')) {
      $('#switcher button').toggleClass('hidden');
    }
  }).on('click', 'button', function() {
    var bodyClass = this.id.split('-')[1];

    $('body').removeClass().addClass(bodyClass);

    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});

/*由于事件委托可以解决很多问题，所以jQuery专门提供了一组方法来实现事件委托。前面讨
 论过的.on()方法可以接受相应参数实现事件委托，如代码清单3-17所示：
 如果给.on()方法传入的第二个参数是一个选择符表达式， jQuery会把click事件处理程序
 绑定到#switcher对象，同时比较event.target和选择符表达式（这里的'button'）。如果匹
 配， jQuery会把this关键字映射到匹配的元素，否则不会执行事件处理程序。

 */