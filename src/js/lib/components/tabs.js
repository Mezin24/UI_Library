import $ from '../core';

$.prototype.tabs = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on('click', (e) => {
      $(this[i])
        .addClass('tab-item--active')
        .sibilings()
        .removeClass('tab-item--active')
        .closest('.tab')
        .find('.tab-content')
        .eq($(this[i]).index())
        .addClass('tab-content--active')
        .sibilings()
        .removeClass('tab-content--active');
    });
  }
};

$('[data-tabpane] .tab-item').tabs();
