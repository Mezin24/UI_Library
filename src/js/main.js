import $ from './lib/lib';

$('.btn').on('click', function () {
  $('div').toggleClass('active', 'item');
});

$('.btn').on('dblclick', function () {
  $('div').removeClass('active', 'item');
});
