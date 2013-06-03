var express = require('express');

function start(route, handle){
	var app = express();
	app.use(express.logger());

	app.get('/' , function(req, res){
		route(handle, '/', res);
	});

	app.get('/w3c/p3p.xml', function(req, res){
		route(handle, '/p3p', res);
	});

	app.get('/w3c/xmlcoding.xml#CFSPP', function(req, res){
		route(handle, '/xmlcoding', res);
	});

	app.get('/w3c/xmlcoding.xml', function(req, res){
		route(handle, '/xmlcoding', res);
	});


	app.use(express.static('./css'));
	app.use(express.static('./js'));
	app.use(express.static('./img'));
	app.use(express.static('./html'));

	var port = process.env.PORT || 3000;
	app.listen(port);
	console.log('Listening on port ' + port);
}

exports.start = start;	

