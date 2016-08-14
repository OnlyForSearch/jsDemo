$(document).ready(function() {
  var $speech = $('div.speech');/*注
   意变量名$speech中的$。由于$是JavaScript变量中合法的字符，因此可以利用它来提醒自己该
   变量中保存着一个jQuery对象*/
  $('#switcher-large').click(function() {
    var num = parseFloat($speech.css('fontSize'));/*通过parseFloat()函数只取得字体大小属性中的数值部分。
     parseFloat()函数会在一个字符串中从左到右地查找一个浮点（十进制）数。例如，它会将字
     符串'12'转换成数字12。另外，它还会去掉末尾的非数字字符，因此'12px'就变成了12。如果
     字符串本身以一个非数字开头，那么parseFloat()会返回NaN，即Not a Number（非数字）。*/
  });
});
