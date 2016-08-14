$(document).ready(function() {
  $('#switcher h3').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

$(document).ready(function() {
  $('#switcher').click(function(event) {
    $('#switcher button').toggleClass('hidden');
  });
});

$(document).ready(function() {
  $('#switcher-default').addClass('selected');

  $('#switcher').click(function(event) {
    /*里使用了一个新方法，即.is()。这个方法接收一个选择符表达式（第2章介绍过） ，然后
     用选择符来测试当前的jQuery对象,$(event.target).is('button')测试被单击的元素是否包含button标签。*/
    if ($(event.target).is('button')) {//当发生单击事件时，可以使用event.target属性检查鼠标指针下方是什么元素
      var bodyClass = event.target.id.split('-')[1];

      $('body').removeClass().addClass(bodyClass);

      $('#switcher button').removeClass('selected');
      $(event.target).addClass('selected');
      event.stopPropagation();
    }
  });
});