$(document).ready(function() {
  // Use attr() to add an id, rel, and title.
  $('div.chapter a').attr({rel: 'external'});/*排队回调函数
   为了对不同元素上的效果实现排队， jQuery为每个效果方法都提供了回调函数*/
});
