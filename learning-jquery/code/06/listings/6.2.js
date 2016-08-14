$(document).ready(function() {
  $('#letter-a a').click(function(event) {
    event.preventDefault();
    $('#dictionary').load('a.html');
    alert('Loaded!');/*，load(),AJAX()方法都是异步的你可能会认为警告框只有在加载过程完成后才会显示。因为JavaScript
     通常以同步方式执行代码，即严格按照顺序逐行执行。*/
  });
});
