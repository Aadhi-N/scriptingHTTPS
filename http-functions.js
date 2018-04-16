var https = require('https');


module.exports = function getHTML (options, callback) {

	https.get(options, function (response) {
		response.setEncoding('utf8'); //this makes the chunks into strings
		var complete = '';//changing into a string

		response.on('data', function (html) {

			console.log('Chunk of data received.')
			// for (i = 0; i < html.length; i++) {
				complete += html;
			// }
			// return complete;
		});

		response.on('end', function() {
			callback(complete);
		console.log('Response stream complete.');
		});
	});
}


