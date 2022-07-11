import $ from '../core';

$.prototype.get = async function (url, getTypeFormat = 'json') {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could\'t fetch ${url}, status ${res.status}`);
  }

  switch (getTypeFormat) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();
  }
};

$.prototype.post = async function (url, data, getTypeFormat = 'json') {
  const res = await fetch(url, {
    method: 'POST',
    body: data,
  });

  switch (getTypeFormat) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();
  }
};
