$(document).ready(function() {
  $('#books').cycle({
    timeout: 2000,
    speed: 200,
    pause: true
  });/*我们可以修改Cycle插件的两个幻灯片之间的播放速度和动画样式，修改幻灯片变换的触发
   方式，还可以使用回调函数针对动画完成作出响应
   第一个timeout选项用于指定切换幻灯片之间等待的毫秒数（2000） ，而speed决定切换本
   身要花的毫秒数（200） 。在把pause设置为true的情况下，幻灯片会在鼠标进入时暂停播放，这
   在幻灯片中包含可以单击的链接时非常有用。

   */
});
