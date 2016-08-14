$(document).ready(function() {
  $('#letter-a a').click(function(event) {
    event.preventDefault();
    $('#dictionary').load('a.html');
  });

  $('#letter-b a').click(function(event) {
    event.preventDefault();
    $.getJSON('b.json', function(data) {/*，这个参数是当加载完成时调用的函数。如上所述，
     Ajax请求都是异步的，回调函数提供了一种等待数据返回的方式，而不是立即执行代码。回调函
     数也需要一个参数，该参数中保存着返回的数据。*/
    });
  });
});
