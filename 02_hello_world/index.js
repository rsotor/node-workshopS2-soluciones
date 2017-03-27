'use strict';

const restify = require('restify');

const server = restify.createServer();

server.get('/hello/:username', (req, res, next) => {
	console.log(req.params.username);
	const username = req.params.username;
	res.send('Bienvenido ' + username);
	next();
});

server.listen(3000, (err) => {
	console.log('%s listening at %s', server.name, server.url);
}); 
