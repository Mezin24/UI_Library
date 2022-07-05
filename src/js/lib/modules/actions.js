import $ from '../core';

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

$.prototype.eq = function (num) {
  if (!num) {
    return this;
  }

  const el = this[num];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = el;
  this.length = 1;

  return this;
};

$.prototype.index = function () {
  const parendNode = this[0].parentNode;

  return [...parendNode.children].findIndex((el) => el === this[0]);
};

$.prototype.find = function (selector) {
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);

    if (arr.length === 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }
  }

  for (; counter < this.length; counter++) {
    delete this[counter];
  }

  this.length = Object.keys(this).length;
  return this;
};

$.prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector)) {
      this[counter++] = this[i].closest(selector);
    }
  }

  const objLength = Object.keys(this).length;

  for (; counter < this.length; counter++) {
    delete this[counter];
  }

  return this;
};

$.prototype.sibilings = function () {
  const parent = this[0].parentNode;
  const children = parent.children;
  let counter = 0;

  const filtered = [...children].filter((el) => el !== this[0]);

  for (; counter < filtered.length; counter++) {
    this[counter] = filtered[counter];
  }

  for (; counter < this.length; counter++) {
    delete this[counter];
  }
  this.length = filtered.length;

  return this;
};
