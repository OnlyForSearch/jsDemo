$(document).ready(function() {
  // Enable hover effect on the style switcher在样式转换器按钮上启用悬停效果
  $('#switcher').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });

  // Allow the style switcher to expand and collapse.让样式转换器能够扩展和折叠
  var toggleSwitcher = function(event) {
    if (!$(event.target).is('button')) {
      $('#switcher button').toggleClass('hidden');
    }
  };
  $('#switcher').on('click', toggleSwitcher);

  // Simulate a click so we start in a collaped state./模拟一次单击，以便开始时处理折叠状态
  $('#switcher').click();

  // The setBodyClass() function changes the page style.setBodyClass()用于修改页面样式
  // The style switcher state is also updated.样式转换器的状态也会被更新
  var setBodyClass = function(className) {
    $('body').removeClass().addClass(className);

    $('#switcher button').removeClass('selected');
    $('#switcher-' + className).addClass('selected');

    $('#switcher').off('click', toggleSwitcher);

    if (className == 'default') {
      $('#switcher').on('click', toggleSwitcher);
    }
  };

  // begin with the switcher-default button "selected"开始的时候先选中switcher-default按钮
  $('#switcher-default').addClass('selected');

  // Map key codes to their corresponding buttons to click开始的时候先选中switcher-default按钮
  var triggers = {
    D: 'default',
    N: 'narrow',
    L: 'large'
  };

  // Call setBodyClass() when a button is clicked.当按钮被单击时调用setBodyClass()
  $('#switcher').click(function(event) {
    if ($(event.target).is('button')) {
      var bodyClass = event.target.id.split('-')[1];
      setBodyClass(bodyClass);
    }
  });

  // Call setBodyClass() when a key is pressed.
  $(document).keyup(function(event) {
    var key = String.fromCharCode(event.which);
    if (key in triggers) {
      setBodyClass(triggers[key]);
    }
  });
});
