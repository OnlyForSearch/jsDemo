$(document).ready(function() {
  $('#letter-a a').click(function(event) {
    event.preventDefault();

    /*$.ajax()接受了一个包含30余项设置（settings）的对象作为参数（或者一个URL
     字符串作为第一个参数，一个对象作为第二个参数），提供了极大的灵活性。使用低级的$.ajax()
     函数时，可以获得下列特殊的好处。
      避免浏览器缓存来自服务器的响应。非常适合服务器动态生成数据的情况。
      抑制正常情况下所有Ajax交互都可以触发的全局处理程序（例如通过$.ajaxStart()注
     册的处理程序）。
      在远程主机需要认证的情况下，可以提供用户名和密码。*/
    $.ajax({
      url: 'a.html',
      success: function(data) {
        $('#dictionary').html(data);
      }
    });
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

  $('#letter-e a').click(function(event) {
    event.preventDefault();
    var requestData = {term: $(this).text()};
    $.get('e.php', requestData, function(data) {
      $('#dictionary').html(data);
    }).fail(function(jqXHR) {
      $('#dictionary')
      .html('Sorry, but an error occurred: ' + jqXHR.status)
      .append(jqXHR.responseText);
    });
  });

  $('#letter-f form').submit(function(event) {
    event.preventDefault();
    var formValues = $(this).serialize();
    $.get('f.php', formValues, function(data) {
      $('#dictionary').html(data);
    });
  });

  var url = 'http://examples.learningjquery.com/jsonp/g.php';
  $('#letter-g a').click(function(event) {
    event.preventDefault();
    $.getJSON(url + '?callback=?', function(data) {
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

  var $loading = $('<div id="loading">Loading...</div>')
    .insertBefore('#dictionary');

  $(document).ajaxStart(function() {
    $loading.show();
  }).ajaxStop(function() {
    $loading.hide();
  });

  $('body').on('click', 'h3.term', function() {
    $(this).siblings('.definition').slideToggle();
  });
});
