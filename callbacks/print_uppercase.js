var getHTML = require('../http-functions');

function allcapsHTML (html) {
  console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, allcapsHTML);
