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
/*第一行代码中创建了back to top链接，而第二行代码则为这个链接创建了一个作为目标的锚。
 但是，页面中还没有出现back to top链接.,虽然前面的两行代码创建了新的元素，但是还没有把它们添加页面中*/
  // Add "back to top" links.
  $('<a href="#top">back to top</a>');
  $('<a id="top"></a>');
});
