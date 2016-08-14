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

  $('#letter-e a').click(function(event) {
    event.preventDefault();
    var requestData = {term: $(this).text()};
    $('#dictionary').load('e.php', requestData);
  });

  $('#letter-f form').submit(function(event) {
    event.preventDefault();
    var formValues = $(this).serialize();
    $.get('f.php', formValues, function(data) {
      $('#dictionary').html(data);
    });
  });
/*好的！我们的加载反馈系统已经就位了。*/
  var $loading = $('<div id="loading">Loading...</div>')
    .insertBefore('#dictionary');

  $(document).ajaxStart(function() {/*ajaxStart()将它注册为一个“观察员” 即可：*/
    $loading.show();
  }).ajaxStop(function() {
    $loading.hide();
  });

  /*现在为止，我们已经学习了如何调用Ajax方法，并且始终都在处理响应。然而，有时候多
   了解一些调用Ajax方法过程中的HTTP请求也会给我们带来方便。为满足这种需求， jQuery提供
   了一组函数，通过它们能够为各种与Ajax相关的事件注册回调函数。
   其中， .ajaxStart()和.ajaxStop()方法就是这些“观察员”函数中的两个例子，可以把
   它们添加给任何jQuery对象。当Ajax请求开始且尚未进行其他传输时，会触发.ajaxStart()的
   回调函数。相反，当最后一次活动请求终止时，则会执行通过.ajaxStop()注册的回调函数。
   所有这些“观察员”都是全局性的，因为无论创建它们的代码位于何处，当Ajax通信发生时都需
   要调用它们。而且这些方法都与.ready()方法一样，只能由$(document)调用*/
});
