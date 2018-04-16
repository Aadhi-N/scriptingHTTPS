var getHTML = require('../http-functions');

function reverseHTML (html) {
  console.log(html.split('').reverse().join(''));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, reverseHTML);
