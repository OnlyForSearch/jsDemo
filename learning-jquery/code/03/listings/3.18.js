$(document).ready(function() {
  $('#switcher').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

$(document).ready(function() {
  $('#switcher').click(function(event) {
    if (!$(event.target).is('button')) {
      $('#switcher button').toggleClass('hidden');
    }
  });

  $('#switcher-narrow, #switcher-large').click(function() {
    $('#switcher').off('click');//调用.off()方法移除折叠处理程序
  });
});

$(document).ready(function() {
  $('#switcher-default').addClass('selected');

  $('#switcher').click(function(event) {
    if ($(event.target).is('button')) {
      var bodyClass = event.target.id.split('-')[1];

      $('body').removeClass().addClass(bodyClass);

      $('#switcher button').removeClass('selected');
      $(event.target).addClass('selected');
    }
  });
});

/*移除事件处理程序
 有时候，我们需要停用以前注册的事件处理程序。可能是因为页面的状态发生了变化，导致
 相应的操作不再有必要。处理这种情形的一种典型做法，就是在事件处理程序中使用条件语句。
 但是，如果能够完全移除处理程序绑定显然更有效率。
 假设我们希望折叠样式转换器在页面没有使用正常样式的情况下保持扩展状态，即当Narrow
 Column或 Large Print按钮被选中时，单击样式转换器的背景区域不应该引发任何操作。为此，可
 以在单击非默认样式转换按钮时，调用.off()方法移除折叠处理程序*/