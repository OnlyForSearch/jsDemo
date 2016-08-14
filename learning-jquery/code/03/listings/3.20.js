$(document).ready(function() {
  $('#switcher').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

$(document).ready(function() {
  var toggleSwitcher = function(event) {/*为此，应该在Default按钮被单击时， 重新绑定事件处理
   程序。
   首先，应该为事件处理程序起个名字，以便多次使用*/
    if (!$(event.target).is('button')) {
      $('#switcher button').toggleClass('hidden');
    }
  };

  $('#switcher').on('click.collapse', toggleSwitcher);

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

