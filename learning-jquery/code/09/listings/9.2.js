/******************************************************************************
  Our plugin code comes first in this document. Normally, plugins would
  appear in separate files named jquery.plugin-name.js, but for our examples
  it's convenient to place this plugin code in the same JavaScript file as
  the code that calls it.
******************************************************************************/


/******************************************************************************
  End plugin code; begin custom script code.
******************************************************************************/

$(document).ready(function() {
  $('#topics a').click(function(event) {
    event.preventDefault();
    var topic = $(this).text();/*我们把链接的文本保存在变量topic中，以便用它与表格中的文本进行比较。*/

    $('#topics a.selected').removeClass('selected');
    $(this).addClass('selected');

    $('#news tr').show();
    if (topic != 'All') {
      /*的一开始很直观，就是用#news tr找到表格中的所有行。在接下来筛选元素
       时，使用自定义选择符:has()。这个选择符从当前被选中的元素中挑选出那些包含指定元素
       的元素。而自定义选
       择符:contains()只会匹配那些某个单元格中包含指定文本的行，在它的外面再加上:not()选
       择符，也就得到了不包含相关主题的表格行，最后把这些行隐藏起来就好了。*/
      $('#news tr:has(td):not(:contains("' + topic + '"))')
        .hide();
    }
  });
});
