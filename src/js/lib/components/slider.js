import $ from '../core';

$.prototype.slider = function () {
  function changeDot(dots, activeDot) {
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });
    dots[activeDot].classList.add('active');
  }

  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(
      this[i].querySelector('.carousel-inner')
    ).width;
    const slides = this[i].querySelectorAll('.carousel-item');
    const dots = this[i].querySelectorAll('.carousel-indicators li');
    const slidesField = this[i].querySelector('.carousel-slides');

    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach((slide) => {
      slide.style.width = width;
    });

    let offset = 0;
    let slideIndex = 0;

    this[i]
      .querySelector('[data-slide="next"]')
      .addEventListener('click', (e) => {
        e.preventDefault();

        if (offset === +width.replace(/\D/g, '') * (slides.length - 1)) {
          offset = 0;
          slideIndex = 0;
        } else {
          offset += +width.replace(/\D/g, '');
          slideIndex++;
        }

        this[i].querySelector(
          '.carousel-slides'
        ).style.transform = `translateX(-${offset}px)`;

        changeDot(dots, slideIndex);
      });

    this[i]
      .querySelector('[data-slide="prev"]')
      .addEventListener('click', (e) => {
        e.preventDefault();

        if (offset === 0) {
          offset = +width.replace(/\D/g, '') * (slides.length - 1);
          slideIndex = slides.length - 1;
        } else {
          offset -= +width.replace(/\D/g, '');
          slideIndex--;
        }

        this[i].querySelector(
          '.carousel-slides'
        ).style.transform = `translateX(-${offset}px)`;

        changeDot(dots, slideIndex);
      });

    this[i].querySelectorAll('.carousel-indicators li').forEach((dot) => {
      dot.addEventListener('click', () => {
        const dotNum = dot.getAttribute('data-slide-to');
        slideIndex = dotNum;
        offset = +width.replace(/\D/g, '') * slideIndex;
        this[i].querySelector(
          '.carousel-slides'
        ).style.transform = `translateX(-${offset}px)`;

        changeDot(dots, slideIndex);
      });
    });
  }
};

$('.carousel').slider();
