import $ from '../core';

$.prototype.setAttr = function (attribute, value) {
  if (!attribute || !value) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    if (attribute && !value) {
      this[i].setAttribute(attribute, '');
    } else {
      this[i].setAttribute(attribute, value);
    }
  }

  return this;
};

$.prototype.removeAttr = function (attribute) {
  if (!attribute) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attribute);
  }

  return this;
};

$.prototype.toggleAttr = function (attribue, value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(attribue)) {
      this[i].setAttribute(attribue, value);
    } else if (this[i].getAttribute(attribue) !== value) {
      this[i].setAttribute(attribue, value);
    } else if (
      this[i].hasAttribute(attribue) &&
      this[i].getAttribute(attribue) === value
    ) {
      this[i].removeAttribute(attribue);
    }
  }
  return this;
};
