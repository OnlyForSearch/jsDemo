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
    var topic = $(this).text();

    $('#topics a.selected').removeClass('selected');
    $(this).addClass('selected');

    $('#news').find('tr').show();
    if (topic != 'All') {
      /*not()可以接收一个回调
       函数，该函数将在检测每个元素的时候调用。如果这个函数返回true，那么被检测的元素就会
       被排除在结果集之外。*/
      $('#news').find('tr:has(td)').not(function() {
        return $(this).children(':nth-child(4)').text() == topic;
      }).hide();
    }
  });
});
