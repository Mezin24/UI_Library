import $ from '../core';

$.prototype.animateOverTime = function (duration, callback, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / duration, 1);

    callback(complection);

    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

$.prototype._fadeOut = function (el, duration, fin) {
  const _fadeOut = (complection) => {
    el.style.opacity = 1 - complection;

    if (complection === 1) {
      el.style.display = 'none';
    }
  };

  const ani = this.animateOverTime(duration, _fadeOut, fin);
  requestAnimationFrame(ani);
};

$.prototype._fadeIn = function (el, duration, display, fin) {
  el.style.display = display || 'block';

  const _fadeIn = (complection) => {
    el.style.opacity = complection;
  };

  const ani = this.animateOverTime(duration, _fadeIn, fin);
  requestAnimationFrame(ani);
};

$.prototype.fadeOut = function (duration, fin) {
  for (let i = 0; i < this.length; i++) {
    this._fadeOut(this[i], duration, fin);
  }

  return this;
};

$.prototype.fadeIn = function (duration, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this._fadeIn(this[i], duration, display, fin);
  }
  return this;
};

$.prototype.fadeToggle = function (duration, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this._fadeIn(this[i], duration, fin);
    } else {
      this._fadeOut(this[i], duration, display, fin);
    }
  }

  return this;
};
