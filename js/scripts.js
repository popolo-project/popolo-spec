$('.tab-content.no-js div').each(function () {
  var $this = $(this);
  if ($this.data('url')) {
    $.get($this.data('url'), function (data) {
      $this.html('<a class="download-link" href="' + $this.data('url') + '">Download</a><pre>' + $('<div/>').text(data).html() + '</pre>');
    }, 'html');
  }
});
$('.nav-tabs.no-js a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
