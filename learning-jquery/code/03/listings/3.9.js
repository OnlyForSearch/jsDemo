$(document).ready(function() {
  $('#switcher h3').click(function() {
    $('#switcher button').toggleClass('hidden');/*在第一次单击后，所有按钮都会隐藏起来，而第二次单击则又恢复了它们的可见性。*/
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
