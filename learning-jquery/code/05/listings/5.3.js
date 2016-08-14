$(document).ready(function() {
  // Use attr() to add an id, rel, and title.
  $('div.chapter a').attr({
    rel: 'external',
    title: 'Learn more at Wikipedia',
    id: function(index, oldValue) {/*每次触发值回调，都会给它传入两个参数。第一个是一个整数，表示迭代次数，我们在此利
     用这个值为第一个链接生成的id是wikilink-0，为第二个链接生成的id是wikilink-1，以此
     类推。*/
      return 'wikilink-' + index;
    }
  });
});
/*值回调其实就是给参数传入一个函数，而不是传入具体的值。这个函数会针对匹配的元素集
 中的每个元素都调用一次，调用后的返回值将作为属性的值。*/
