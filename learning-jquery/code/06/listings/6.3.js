$(document).ready(function() {
  $('#letter-a a').click(function(event) {
    event.preventDefault();
    $('#dictionary').load('a.html');
  });

  $('#letter-b a').click(function(event) {
    event.preventDefault();
    $.getJSON('b.json');/*因为虽然函数调用加载了文件，但是并没有告
     诉JavaScript对返回的数据如何处理。*/
  });
});
