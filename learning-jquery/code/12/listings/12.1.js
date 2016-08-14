/************************************************
  Table 1: Sorting by parsing cell contents.
************************************************/
$(document).ready(function() {
  var $table1 = $('#t-1');
  var $headers = $table1.find('thead th').slice(1);/*首先（使用.slice()方法）跳过每个表格的第一个<th>元素，因为这个表头中不包含任何 文本，同时也没有必要为封面图片加标签或排序*/
  $headers
    .wrapInner('<a href="#"></a>')
    .addClass('sort');
});