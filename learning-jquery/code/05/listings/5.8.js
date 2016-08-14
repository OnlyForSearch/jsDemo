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
  $('<a id="top"></a>').prependTo('body');/*现在的链接还不能用。因此，我们需要再插入id="top"的锚。要插入这个锚，可以
   选用一种在其他元素中插入元素的方*/
});
/*如果再算上.appendTo()方法，那我们就已经知道了在其他元素前、后插入新内容的一套
 方案。
  .insertBefore()在现有元素外部、之前添加内容；
  .prependTo()在现有元素内部、之前添加内容；
  .appendTo()在现有元素内部、之后添加内容；
  .insertAfter()在现有元素外部、之后添加内容。*/