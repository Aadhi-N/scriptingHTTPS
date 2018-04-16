
var https = require('https');


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


function getAndPrintHTML (options) {





	https.get(options, function (response) {

		response.setEncoding('utf8');

		response.on('data', function (data) {
			console.log('Chunk of data received.', data)

			var complete = [];

			for (i = 0; i < data.length; i++) {
					complete += data[i];
			
			}
				return complete;
		});

		response.on('end', function() {
			console.log('Response stream complete.');
		});


	});
}


//create a loop that takes all the results of data. current data stored in var; next data is added on to current data (eg var +=); print result of that.

getAndPrintHTML(requestOptions);



// ANOTHER OPTION WHERE YOU DON'T NEED TO HAVE OBJECT IN HERE
// getAndPrintHTML({
//     host: 'sytantris.github.io',
//     path: '/http-examples/step2.html'
//   });

// getAndPrintHTML({
//     host: 'sytantris.github.io',
//     path: '/http-examples/step3.html'
//   });