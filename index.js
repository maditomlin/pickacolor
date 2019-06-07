var submit = $('.color-submit');
var body = $('body');

submit.on('click', function() {
  var selectedColor = $('.color-input').val();
  body.css('backgroundColor', selectedColor);
});
