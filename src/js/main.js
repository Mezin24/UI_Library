import $ from './lib/lib';

$('#trigger').click(function (e) {
  $(this).createModal({
    text: {
      title: 'Modal title #2',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae mollitia,',
    },
    btns: {
      count: 2,
      settings: [
        ['Close', ['btn-danger'], true],
        ['Submit', ['btn-success', 'ml-20'], false, () => alert('submit')],
      ],
    },
  });
});

$()
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((res) => console.log(res));
