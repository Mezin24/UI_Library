import $ from '../core';

$.prototype.modal = function () {
  for (let i = 0; i < this.length; i++) {
    const modalId = this[i].getAttribute('data-target');
    $(this[i]).click((e) => {
      e.preventDefault();
      const scroll = calcScrollWidth();
      $(modalId).fadeIn(500);

      if (
        document.documentElement.scrollHeight >
        document.documentElement.clientHeight
      ) {
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.marginRight = `${scroll}px`;
      }
    });
  }

  function closeModal() {
    $('.modal').fadeOut(500);
    document.documentElement.style.marginRight = `0px`;
    document.documentElement.style.overflow = 'auto';
  }

  function calcScrollWidth() {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);

    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  document.querySelectorAll('[data-close]').forEach((item) => {
    item.addEventListener('click', closeModal);
  });

  $('.modal').click(function (e) {
    if (e.target === this) {
      closeModal();
    }
  });
};

$('[data-toggle="modal"]').modal();
