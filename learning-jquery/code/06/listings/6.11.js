$(document).ready(function() {
  $('#letter-a a').click(function(event) {
    event.preventDefault();
    $('#dictionary').load('a.html');
  });

  $('#letter-b a').click(function(event) {
    event.preventDefault();
    $.getJSON('b.json', function(data) {
      var html = '';
      $.each(data, function(entryIndex, entry) {
        html += '<div class="entry">';
        html += '<h3 class="term">' + entry.term + '</h3>';
        html += '<div class="part">' + entry.part + '</div>';
        html += '<div class="definition">';
        html += entry.definition;
        if (entry.quote) {
          html += '<div class="quote">';
          $.each(entry.quote, function(lineIndex, line) {
            html += '<div class="quote-line">' + line + '</div>';
          });
          if (entry.author) {
            html += '<div class="quote-author">' + entry.author + '</div>';
          }
          html += '</div>';
        }
        html += '</div>';
        html += '</div>';
      });
      $('#dictionary').html(html);
    });
  });

  $('#letter-c a').click(function(event) {
    event.preventDefault();
    $.getScript('c.js');
  });

  $('#letter-d a').click(function(event) {
    event.preventDefault();
    $.get('d.xml', function(data) {
      $('#dictionary').empty();
      $(data).find('entry').each(function() {
        var $entry = $(this);
        var html = '<div class="entry">';
        html += '<h3 class="term">' + $entry.attr('term');
          html += '</h3>';
        html += '<div class="part">' + $entry.attr('part');
          html += '</div>';
        html += '<div class="definition">';
        html += $entry.find('definition').text();
        var $quote = $entry.find('quote');
        if ($quote.length) {
          html += '<div class="quote">';
          $quote.find('line').each(function() {
            html += '<div class="quote-line">';
              html += $(this).text() + '</div>';
          });
          if ($quote.attr('author')) {
            html += '<div class="quote-author">';
              html += $quote.attr('author') + '</div>';
          }
          html += '</div>';
        }
        html += '</div>';
        html += '</div>';
        $('#dictionary').append($(html));
      });
    });
  });


  /*使用POST方法与使用GET方法的HTTP请求几乎是一样的。从视觉上来看，它们之间一个最
   大的区别就是GET请求把参数放在作为URL一部分的查询字符串中，而POST请求则不是。但是，
   在Ajax请求中，即使是这种区别对一般用户而言也是不可见的。通常，决定使用哪种方法的唯一
   理由就是遵照服务器端代码的约定，或者要传输大量的数据——GET方法对传输的数据量有更严
   格的限制。由于我们编写的PHP代码能够妥善地处理任何一种方法发送的请求，因此只需改变调
   用的jQuery函数，就可以在GET和POST之间进行转换，*/
  $('#letter-e a').click(function(event) {
    event.preventDefault();
    var requestData = {term: $(this).text()};
    $.post('e.php', requestData, function(data) {
      $('#dictionary').html(data);
    });
  });
});
