$(document).ready(function() {
  $('#selected-plays > li').addClass('horizontal');
  $('#selected-plays li:not(.horizontal)').addClass('sub-level');

  $('a[href^="mailto:"]').addClass('mailto');
  $('a[href$=".pdf"]').addClass('pdflink');
  $('a[href^="http"][href*="henry"]').addClass('henrylink');

  $('a').filter(function() {
    return this.hostname && this.hostname != location.hostname;
  }).addClass('external');

  $('tr:nth-child(odd)').addClass('alt');
  $('td:contains(Henry)').next().addClass('highlight');//为下一个添加样式next(),选择最接近的兄弟元素
});
