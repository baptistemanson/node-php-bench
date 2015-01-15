//server.js
var http = require('http');	
var server = http.createServer(handler);

var path = "test-node/";

function handler(request, response) {
	//console.log('request received!');
	response.writeHead(200, {'Content-Type': 'text/plain'});
 
	s=""; //generate a random string of 108KB and a random filename
	fname =  path + String.fromCharCode(Math.floor(65 + (Math.random()*(122-65)) )) +
		String.fromCharCode(Math.floor(65 + (Math.random()*(122-65)) )) +
		String.fromCharCode(Math.floor(65 + (Math.random()*(122-65)) )) + 
		String.fromCharCode(Math.floor(65 + (Math.random()*(122-65)) )) + ".txt";
 
	for(i=0;i<108000;i++)
	{
		n=Math.floor(65 + (Math.random()*(122-65)) );
		s+=String.fromCharCode(n);
	}
 
	//write s to a file
	var fs = require('fs');
	fs.writeFileSync(fname,s);
	response.end(fs.readFileSync(fname));
}
 
server.listen(80);
console.log('Server running at http://127.0.0.1:80/');