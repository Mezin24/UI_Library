import $ from '../core';

$.prototype.accordion = function (
  headActive = 'accordion-head--active',
  contentActive = 'accordion-content--active',
  padding = 40
) {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).click(() => {
      this[i].classList.toggle(headActive);
      this[i].nextElementSibling.classList.toggle(contentActive);

      if (this[i].nextElementSibling.classList.contains(contentActive)) {
        this[i].nextElementSibling.style.maxHeight =
          this[i].nextElementSibling.scrollHeight + padding + 'px';
      } else {
        this[i].nextElementSibling.style.maxHeight = '0px';
      }
    });
  }
};

$('.accordion-head').accordion();
