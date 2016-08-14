$(document).ready(function() {
  $('#selected-plays > li').addClass('horizontal');
  $('#selected-plays li:not(.horizontal)').addClass('sub-level');

  $('a[href^="mailto:"]').addClass('mailto');
  $('a[href$=".pdf"]').addClass('pdflink');
  $('a[href^="http"][href*="henry"]').addClass('henrylink');

  $('a').filter(function() {/*隐式的迭代能力*/
    //筛选出符合连个条件的<a>元素
    //1必须包含域名的href属性,,可以排除mailto以及类似链接
    //2链接指向的域名必须不等于当前页面所在的域名的
    return this.hostname && this.hostname != location.hostname;
  }).addClass('external');

  $('tr:nth-child(odd)').addClass('alt');
  $('td:contains(Henry)').addClass('highlight');
});
