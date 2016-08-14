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
  $('#news tr:nth-child(even)').addClass('alt');

  $('#topics a').click(function(event) {
    event.preventDefault();
    var topic = $(this).text();

    $('#topics a.selected').removeClass('selected');
    $(this).addClass('selected');

    $('#news').find('tr').show();
    if (topic != 'All') {
      $('#news').find('tr:has(td)').not(function() {/*这个直观的选择符会找到每个偶数行，而每年的新闻都位于它们自己的<tbody>元素中，因
       此交替效果会在每个子部分中重新开始*/
        return $(this).children(':nth-child(4)').text() == topic;
      }).hide();
    }
  });
});
