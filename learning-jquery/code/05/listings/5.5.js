$(document).ready(function() {
  // Use attr() to add an id, rel, and title.
  $('div.chapter a[href*="wikipedia"]').attr({
    rel: 'external',
    title: function() {/*们利用了值回调的上下文。就像在事件处理程序中一样，在值回调函数中， this
     关键字指向每次调用回调时正在操作的那个DOM元素*/
      return 'Learn more about ' + $(this).text() + ' at Wikipedia.';/*们利用了值回调的上下文。就像在事件处理程序中一样，在值回调函数中， this
       关键字指向每次调用回调时正在操作的那个DOM元素*/
    },
    id: function(index, oldValue) {
      return 'wikilink-' + index;
    }
  });
});
