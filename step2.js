

var https = require('https');



function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


	https.get(requestOptions, function (response) {

		response.setEncoding('utf8');

		response.on('data', function (data) {
			console.log('Chunk of data received.', data)

			var complete = [];

			for (i = 0; i < data.length; i++) {
				// if (complete == undefined) {
				// 	complete = data[i];
				// } 
				// if {
					complete += data[i];
				// }
			}
				return complete;
		});

		response.on('end', function() {
			console.log('Response stream complete.');
		});


	});
}


//create a loop that takes all the results of data. current data stored in var; next data is added on to current data (eg var +=); print result of that.

getAndPrintHTML();