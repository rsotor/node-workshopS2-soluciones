## Enunciado

Refactorizar el programa de la sesión 1 para usar un template engine en lugar de escribir linea a linea el código HTML.

```javascript
'use strict';

const http = require('http');

const server = http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<!DOCTYPE "html">');
  response.write('<html>');
  response.write('<head>');
  response.write('<title>workshop node</title>');
  response.write('</head>');
  response.write('<body>');
  response.write('<h1>');
  response.write('Titulo');
  response.write('</h1>');
  response.write('<h2>');
  response.write('SubTitulo');
  response.write('</h2>');
  response.write('<p>');
  response.write('mi parrafo!');
  response.write('</p>');
  response.write('</body>');
  response.write('</html>');
  response.end();
});

server.listen(3000, (err, res) =>{
  console.log('Servidor Arrancado');  
});
```

El resultado tiene que ser el mismo, pero usando una template ejs
