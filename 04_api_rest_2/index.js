'use strict';

const restify = require('restify');

const server = restify.createServer();
server.use(restify.bodyParser({ mapParams: true }));

let notes = [];
let lastId = 0;

server.post('/notes', addNote);
server.get('/notes', listNotes);
server.put('/notes/:noteid', editNote);
server.del('/notes/:noteid', deleteNote);

server.listen(3000, (err) => {
	console.log('%s listening at %s', server.name, server.url);
}); 

function addNote (req, res, next) {
	const note = req.body;
	note.id = lastId++;
	notes.push(note);
	res.send(note);
	next();
}

function listNotes (req, res, next) {
    res.send(notes);
    next();
}

function editNote (req, res, next) {
	const noteId = req.params.noteid;
	const id = notes.findIndex(x => x.id == noteId);
	const note = req.body;
	note.id = parseInt(noteId);
	notes[id] = note;
    res.send(notes);
    next();
}

function deleteNote (req, res, next) {
	const noteId = req.params.noteid;
	notes = notes.filter(x => x.id != noteId);
    res.send(notes);
    next();
}

