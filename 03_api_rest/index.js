'use strict';

const restify = require('restify');

const server = restify.createServer();
server.use(restify.bodyParser({ mapParams: true }));

const notes = [];

server.post('/notes', addNote);
server.get('/notes', listNotes);

server.listen(3000, (err) => {
	console.log('%s listening at %s', server.name, server.url);
}); 

function addNote (req, res, next) {
	const note = req.body;
	
	notes.push(note);
	res.send({operation: 'ok'});
	next();
}

function listNotes (req, res, next) {
    res.send(notes);
    next();
}