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
  $('span.footnote').each(function(index) {/*为了在正文中标记提取脚注的位置，可以利用.each()回调的参数。这个参数表示迭代的次
   数，从0开始，每迭代一次就加1。因此这个数值始终都比当前的脚注编号小1。可以利用这个参
   数在正文中生成适当的标签，*/
    $('<sup>' + (index + 1) + '</sup>').insertBefore(this);
    $(this).appendTo($notes).wrap('<li></li>');
  });
});
