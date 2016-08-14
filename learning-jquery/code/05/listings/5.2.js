$(document).ready(function() {
  // Use attr() to add an id, rel, and title.
  $('div.chapter a').attr({
    rel: 'external',
    title: 'Learn more at Wikipedia'
  });/*更常用的方式还是传入一个包含键值对的对象，如代码清单5-1所示。使用对象可以轻松
   地扩展，以便一次性地修改多个属性，*/
});
