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

    var $clonedCopy = $(this).clone();/*前面已经为这个复制的元素设置了绝对的定位，因此它在段落中的位置是无所谓的。根
       据CSS规则中的设置，只要它处于这个段落的内部，它就会相对于段落的上边和右边进行定位*/
    $clonedCopy
      .addClass('pulled')
      .prependTo($parentParagraph);
  });
});
