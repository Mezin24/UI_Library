import $ from './lib/lib';

$('.box').fadeOut(2000);
$('.btn').click(function () {
  $('.box').fadeIn(2000);
  $(this).fadeOut(2000);
});
