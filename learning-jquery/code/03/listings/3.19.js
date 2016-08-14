$(document).ready(function() {
  $('#switcher').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

$(document).ready(function() {
  $('#switcher').on('click.collapse', function(event) {/*应该让对.off()的调用更有针对性，以避免把注册的两个单击处理程序全都移除。
   达成目标的一种方式是使用事件命名空间，即在绑定事件时引入附加信息，以便将来识别特定的
   处理程序。*/
    if (!$(event.target).is('button')) {
      $('#switcher button').toggleClass('hidden');
    }
  });

  $('#switcher-narrow, #switcher-large').click(function() {
    $('#switcher').off('click.collapse');
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
