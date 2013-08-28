$('.tab-content.no-js div').each(function () {
  var $this = $(this),
      url = $this.data('url');
  if (url) {
    $.get(url, function (data) {
      var json = url.indexOf('.json', url.length - 5) !== -1 || url.indexOf('.jsonld', url.length - 7) !== -1,
          html = '<a class="download-link" href="' + url + '">Download</a><pre>';
      if (json) {
        html += '<code class="language-json">';
      }
      html += $('<div/>').text(data).html();
      if (json) {
        html += '</code>';
      }
      $this.html(html + '</pre>');
      hljs.highlightBlock($this.find('code').get(0));
    }, 'html');
  }
});
$('.nav-tabs.no-js li:not(.disabled) a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
$('.highlight').each(function () {
  hljs.highlightBlock(this);
});
