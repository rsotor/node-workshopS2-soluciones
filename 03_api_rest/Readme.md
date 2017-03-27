# Primer API Rest con Restify
#### tomando como base el código del ejercicio anterior 

```javascript
'use strict';

const restify = require('restify');

const server = restify.createServer();

server.get('/hello/:username', (req, res, next) => {
	const username = req.params.username;
	res.send('Bienvenido ' + username);
	next();
});

server.listen(3000, (err) => {
	console.log('%s listening at %s', server.name, server.url);
}); 
```
##

#### vamos a construir un api para gestionar nuestras notas

1. la url base de nuestro api Rest será **servername:3000/**

2. definiremos un recurso __'/notes'__

3. Crear una nota nueva:
>[POST] **servername:3000/notes** 

en el body le pasaremos:

| element        | example       | 
| -------------- |:-------------:|
| title          | comprar leche | 
| date           | 2017/02/08    |   
| completado     | false         |

4. recuperar todas las notas:
>[GET] **servername:3000/notes** 

devolverá una lista de notas en formato json.
