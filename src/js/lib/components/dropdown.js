import $ from '../core';

$.prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const btn = $(this[i]).find('.dropdown-toggle')[0];
    btn.addEventListener('click', () => {
      $(this[i]).find('.dropdown-menu').fadeToggle(300);
    });
  }
};

$('.dropdown').dropdown();
