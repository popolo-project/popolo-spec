$('.span9 .tab-content div').each(function () {
  var $this = $(this);
  if ($this.data('url')) {
    $.get($this.data('url'), function (data) {
      $this.html('<pre>' + $('<div/>').text(data).html() + '</pre>');
    }, 'html');
  }
});
$('.nav-tabs.no-js a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
