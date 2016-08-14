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
    event.preventDefault();/*.preventDefault()语句用于阻止链接打开新的页面。*/
    $('#topics a.selected').removeClass('selected');/*在用户单击其中某个链接时，先删除所有主题链接的selected类*/
    $(this).addClass('selected');
  });
});
