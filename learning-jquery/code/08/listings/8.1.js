/******************************************************************************
  Our plugin code comes first in this document. Normally, plugins would
  appear in separate files named jquery.plugin-name.js, but for our examples
  it's convenient to place this plugin code in the same JavaScript file as
  the code that calls it.
******************************************************************************/

/******************************************************************************
  $.sum()
  Return the total of the numeric values in an array/object.
******************************************************************************/
(function($) {//在插件中使用$别名立即调用函数表达式IIFE
  $.sum = function(array) {//添加了全局函数
    // Code goes here
  };
})(jQuery);


/******************************************************************************
  End plugin code; begin custom script code.
******************************************************************************/

