'use strict';

const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const templateString = fs.readFileSync('views/index.ejs', 'utf-8');

const params = {
	title: 'Mi Titulo',
	subtitle: 'El subtitulo',
	paragraph: 'el parrafo'
};
const html = ejs.render(templateString, params);

const server = http.createServer((req, res) => {
	res.end(html);
});

server.listen(3000, () => {
	console.log('servidor arrancado en el puerto 3000');
});
