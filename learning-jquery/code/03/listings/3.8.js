$(document).ready(function() {
  $('#switcher-default').addClass('selected');

  $('#switcher button').click(function() {//简写的事件方法click
    var bodyClass = this.id.split('-')[1];

    $('body').removeClass().addClass(bodyClass);

    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
