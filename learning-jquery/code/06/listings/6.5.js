$(document).ready(function() {
  $('#letter-a a').click(function(event) {
    event.preventDefault();
    $('#dictionary').load('a.html');
  });

  $('#letter-b a').click(function(event) {
    event.preventDefault();
    $.getJSON('b.json', function(data) {
      var html = '';
      $.each(data, function(entryIndex, entry) {/*$.each()函数不操作jQuery对象，它以数组或对象作为第一个参数，以回调函数
       作为第二个参数。此外，还需要将每次循环中数组或对象的当前索引和当前项作为回调函数的两
       个参数*/
        html += '<div class="entry">';
        html += '<h3 class="term">' + entry.term + '</h3>';
        html += '<div class="part">' + entry.part + '</div>';
        html += '<div class="definition">';
        html += entry.definition;
        html += '</div>';
        html += '</div>';
      });
      $('#dictionary').html(html);
    });
  });
});
