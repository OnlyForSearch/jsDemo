$(document).ready(function() {
  $('#switcher h3').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

$(document).ready(function() {
  $('#switcher').click(function(event) {
    if (event.target == this) {/*事件处理程序中的变量event保存着事件对象。而event.target属性保存着发生事
     件的目标元素。这个属性是DOM API中规定的，但是没有在某些旧版本的浏览器中实现。 jQuery
     对这个事件对象进行了必要的扩展，从而在任何浏览器中都能够使用这个属性。*/
      $('#switcher button').toggleClass('hidden');
    }
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
