$.fn.cycle.defaults.timeout = 10000;
$.fn.cycle.defaults.random = true;

$(document).ready(function() {
  $('#books').cycle({
    timeout: 2000,
    speed: 200,
    pause: true
  });
});
/*Cycle其实也遵循了一个常见的模式，那就是把所有默认值放在一个对象中。具体到Cycle来
 说，包含所有默认选项的对象是$.fn.cycle.defaults。如果有插件像这样把默认值保存在一个
 公共可见的地方，那么我们就可以在自己的脚本中修改它的默认值，以便在多次调用插件时把代码
 写得更简单，因为不用每次都通过选项来指定新值了。修改默认值非常简单*/
