$(document).ready(function() {
  $('#switcher-default').addClass('selected');
//可以通过再次利用事件的执行上下文来完全消除特殊的处理程序
  $('#switcher button').on('click', function() {
    var bodyClass = this.id.split('-')[1];//因为上下文关键字this引用的是DOM元素，而不是jQuery对象，所以可以使用原生的DOM属性来确定被单击元素的ID

    $('body').removeClass().addClass(bodyClass);

    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
