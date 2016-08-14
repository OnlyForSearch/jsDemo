(function($) {
  $(document).on('mouseenter mouseleave', 'div.photo', function(event) {
    var $details = $(this).find('.details');
    if (event.type == 'mouseenter') {
      $details.fadeTo('fast', 0.7);
    } else {
      $details.fadeOut('fast');
    }
  });

  $(document).ready(function() {
    $('#more-photos').click(function(event) {
      event.preventDefault();
      $(this).trigger('nextPage');/*自定义事件必须在代码中通过手工方式来触发。从某种意义讲，自定义事件类似于我们平常 定义的函数，因为它们都是一个预定义的代码块，可以在脚本中的其他地方调用执行。 .on()方 法对应着一个函数的定义，而.trigger()方法对应着一次函数调用*/
    });
  });
})(jQuery);
