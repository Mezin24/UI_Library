import $ from '../core';

$.prototype.addClass = function (...classes) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.add(...classes);
    }
  }

  return this;
};

$.prototype.removeClass = function (...classes) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.remove(...classes);
    }
  }

  return this;
};

$.prototype.toggleClass = function (...classes) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      for (let j = 0; j < classes.length; j++) {
        this[i].classList.toggle(classes[j]);
      }
    }
  }

  return this;
};
