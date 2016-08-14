$(document).ready(function() {
  $('#switcher h3').hover(function() {/*.hover()方法接受两个函数参数。第一个函数会在鼠标
   指针进入被选择的元素时执行，而第二个函数会在鼠标指针离开该元素时触发,也意味着可以避免JavaScript中的事件传播（event propagation）导致的
   头痛问题。*/
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

$(document).ready(function() {
  $('#switcher h3').click(function() {
    $('#switcher button').toggleClass('hidden');
  });
});

$(document).ready(function() {
  $('#switcher-default').addClass('selected');

  $('#switcher button').click(function() {
    var bodyClass = this.id.split('-')[1];

    $('body').removeClass().addClass(bodyClass);

    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
