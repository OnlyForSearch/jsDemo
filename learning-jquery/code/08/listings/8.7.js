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
(function($) {
  $.mathUtils = {//使用命名空间隔离函数,,避免定义两个相同的函数名,避免冲突
    sum: function(array) {
      var total = 0;

      $.each(array, function(index, value) {
        value = $.trim(value);
        value = parseFloat(value) || 0;

        total += value;
      });
      return total;
    },
    average: function(array) {
      if ($.isArray(array)) {
        return $.mathUtils.sum(array) / array.length;
      }
      return '';
    }
  };
})(jQuery);


/******************************************************************************
  End plugin code; begin custom script code.
******************************************************************************/
$(document).ready(function() {
  var $inventory = $('#inventory tbody');
  var quantities = $inventory.find('td:nth-child(2)')
  .map(function(index, qty) {
    return $(qty).text();
  }).get();

  var prices = $inventory.find('td:nth-child(3)')
  .map(function(index, qty) {
    return $(qty).text();
  }).get();

  var sum = $.mathUtils.sum(quantities);//使用的时候就得加上插件的名字了
  var average = $.mathUtils.average(prices);
  $('#sum').find('td:nth-child(2)').text(sum);
  $('#average').find('td:nth-child(3)').text(average.toFixed(2));
});
