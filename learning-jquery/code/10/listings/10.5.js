$(document).ready(function() {
  var pageNum = 1;
  $('#more-photos').click(function(event) {
    event.preventDefault();
    var $link = $(this);
    var url = $link.attr('href');
    if (url) {
      $.get(url, function(data) {
        $('#gallery').append(data);
      });
      pageNum++;
      if (pageNum < 20) {
        $link.attr('href', 'pages/' + pageNum + '.html');
      }
      else {
        $link.remove();
      }
    }
  });

    /***
     *
     * 时间处理程序指挥添加到on()方法已经存在的元素上,通过AJax调用后来添加的元素不会,
     * 绑定那些事件,两种决解方案,一种加载了新内容之后,"重新绑定时间处理程序",2是一开始把时间绑定到包含的元素上,不依赖时间冒泡,后一个决解方案,,事件委托
     * */
  $('#gallery').on('mouseover mouseout', function(event) {/* jQuery的.on()方法内 置了委托管理能力，为我们扫除了这些障碍,*/

      /**为了实现事件委托,需要检测event对象的target属性,以便知道事件目标是不是我们想要触发
       * 行为的那个元素,事件目标,值得是接受到事件的那个最里面最深处的元素
       * 面临一个新的挑战<div class="photo">元素不可能成为事件目标,应为他还包含其他元素
       * 比如图像和图像的信息,
       * 使用.closest(),方法,这个方法可以沿着DOM树向上一层一层移动,直到找到个顶的选择符
       * 匹配的的那个元素,如果没有找到这个元素,那它就会像其他DOM元素遍历方法一个返回一个"空"jQuery
       * 对象
       *
       * */
    var $target = $(event.target).closest('div.photo');
    var $details = $target.find('.details');
    var $related = $(event.relatedTarget)
                   .closest('div.photo');

    if (event.type == 'mouseover' && $target.length) {
      $details.fadeTo('fast', 0.7);
    } else if (event.type == 'mouseout' && !$related.length) {
      $details.fadeOut('fast');
    }
  });
});

