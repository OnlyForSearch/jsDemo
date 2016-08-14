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
  $('span.footnote')
    .insertBefore('#footer')
    .wrapAll('<ol id="notes"></ol>')/*要在一个元素中包装另一个元素，必须知道是把每个元素分别包装在各自的容器中，还是把
     所有元素包装在一个容器中。考虑到要为每个脚注编号，我们需要实现这两种形式的包装*/
    .wrap('<li></li>');
  /*要在一个元素中包装另一个元素，必须知道是把每个元素分别包装在各自的容器中，还是把
   所有元素包装在一个容器中。考虑到要为每个脚注编号，我们需要实现这两种形式的包装*/
});
