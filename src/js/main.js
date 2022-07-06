import $ from './lib/lib';

$('#first').click(() => $('.container div').eq(0).fadeOut(2000));
$('[data-count="second"]').click(() => $('.container div').eq(1).fadeOut(2000));
$('button')
  .eq(2)
  .click(() => $('.container div').eq().fadeIn(2000));
