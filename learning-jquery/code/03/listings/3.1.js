$(document).ready(function() {//推荐较长形式,较长形式能够更清楚的表明代码在做什么
  $('#switcher-large').on('click', function() {//on()绑定任何DOM事件,添加一种行为
    $('body').addClass('large');
  });
});
