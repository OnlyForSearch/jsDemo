$(document).ready(function() {
  // Use attr() to add an id, rel, and title.
  $('div.chapter a[href*="wikipedia"]').attr({
    rel: 'external',
    title: function() {
      return 'Learn more about ' + $(this).text() + ' at Wikipedia.';
    },
    id: function(index, oldValue) {
      return 'wikilink-' + index;
    }
  });

  // Add "back to top" links.
  $('<a href="#top">back to top</a>').insertAfter('div.chapter p');
  $('<a id="top"></a>').prependTo('body');

  // Create footnotes.
  var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
  $('span.footnote').each(function(index) {
    $(this)
      .before([
        '<a href="#footnote-',
        index + 1,
        '" id="context-',
        index + 1,
        '" class="context">',
        '<sup>',
        index + 1,
        '</sup></a>'
      ].join(''))
      .appendTo($notes)
      .append([
        '&nbsp;(<a href="#context-',
        index + 1,
        '">context</a>)'
      ].join(''))
      .wrap('<li id="footnote-' + (index + 1) + '"></li>');
  });

  // Style pull quotes.
  $('span.pull-quote').each(function(index) {
    var $parentParagraph = $(this).parent('p');
    $parentParagraph.css('position', 'relative');

    var $clonedCopy = $(this).clone();
    $clonedCopy
      .addClass('pulled')
      .find('span.drop')
        .html('&hellip;')
      .end()
      .text($clonedCopy.text())/*代码取得引用的内容时，我们得到的是纯文本，没有任何标签*/
      .prependTo($parentParagraph);
  });
});
/*引用一般不会使用原来的字体样式，例如one more side的粗体。换句话说，我们真正想在引
 用中显示的是去掉了<span class="pull-qoute">中的<strong>、 <em>、 <a href>及其他
 行内标签之后的文本。要想去掉这些HTML标签，就得使用.html()方法的“伙伴” .text()方
 法了。
 与.html()方法类似， .text()也可以取得匹配元素的内容，或者用新字符串替换匹配元素
 的内容。但是，与.html()不同的是， .text()始终会取得或设置纯文本内容。在使用.text()
 取得内容时，所有HTML标签都将被忽略，而所有HTML实体也会被转换成对应的字符。而在通
 过它设置内容时，诸如<这样的特殊字符，都会被转换成等价的HTML实体，*/