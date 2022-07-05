import $ from '../core';

$.prototype.click = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback) {
      this[i].addEventListener('click', callback);
    } else {
      this[i].click();
    }
  }
  return this;
};

$.prototype.on = function (action, callback) {
  if (!action || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(action, callback);
  }
  return this;
};

$.prototype.off = function (action, callback) {
  if (!action || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(action, callback);
  }
  return this;
};
