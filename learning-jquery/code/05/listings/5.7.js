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
  $('<a href="#top">back to top</a>').insertAfter('div.chapter p');/*一种方法的名字都表明了新内容与已有内
   容 之 间 的 关 系 。 例 如 ， 我 们 想 把 back to top 链 接 插 入 到 每 个 段 落 后 面 ， 因 此 就 可 以 使
   用.insertAfter()方法*/
  $('<a id="top"></a>');
});
