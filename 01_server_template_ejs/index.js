'use strict';

const ejs = require('ejs');
const fs = require('fs');
const http = require('http');
const templateString = fs.readFileSync('views/index.ejs', 'utf-8');

const params = {
	title: 'Mi Titulo',
	subtitle: 'El subtitulo',
	paragraph: 'el parrafo'
};
const html = ejs.render(templateString, params);

const server = http.createServer((req, res) => {
	res.end(html);
})

server.listen(3000);

console.log(html);