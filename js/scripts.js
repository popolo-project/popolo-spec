$('.span9 .tab-content div').each(function () {
  var $this = $(this);
  $.get($this.data('url'), function (data) {
    $this.html('<pre>' + $('<div/>').text(data).html() + '</pre>');
  }, 'html');
});
$('.span9 .nav-tabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
