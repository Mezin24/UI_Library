import $ from '../core';

$.prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');
    $(this[i]).click((e) => {
      e.preventDefault();
      const scroll = calcScrollWidth();
      $(target).fadeIn(500);

      if (
        document.documentElement.scrollHeight >
        document.documentElement.clientHeight
      ) {
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.marginRight = `${scroll}px`;
      }
    });
    function closeModal() {
      $(target).fadeOut(500);
      document.documentElement.style.marginRight = `0px`;
      document.documentElement.style.overflow = 'auto';

      if (created) {
        document.querySelector(target).remove();
      }
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

    document.querySelectorAll(`${target} [data-close]`).forEach((item) => {
      item.addEventListener('click', closeModal);
    });

    $(target).click(function (e) {
      if (e.target.classList.contains('modal')) {
        closeModal();
      }
    });
  }
};

$.prototype.createModal = function ({
  text: { title, body },
  btns: { settings, count },
}) {
  for (let i = 0; i < this.length; i++) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));
    const buttons = [];

    for (let j = 0; j < count; j++) {
      const button = document.createElement('button');
      button.classList.add('btn', ...settings[j][1]);
      button.textContent = settings[j][0];
      if (settings[j][2]) {
        button.setAttribute('data-close', true);
      }

      if (settings[j][3] && typeof settings[j][3] === 'function') {
        button.addEventListener('click', settings[j][3]);
      }

      buttons.push(button);
    }

    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <button class="close" data-close>
            <span>&times;</span>
          </button>
          <div class="modal-header">
            <div class="modal-title">${title}</div>
          </div>
          <div class="modal-body">${body}</div>
          <div class="modal-footer"></div>
        </div>
      </div>
    
    `;

    modal.querySelector('.modal-footer').append(...buttons);

    $(modal).fadeIn(500);
    document.documentElement.append(modal);
    $(this[i]).modal(true);
  }
};

$('[data-toggle="modal"]').modal();
