const http = require('http');

http.createServer((req, resp) => {

        resp.writeHead(200, { 'ContentType': 'application/json' });

        let salida = {
            nombre: 'Ana Hernandez',
            edad: 23,
            url: req.url
        }

        //resp.write('Hola mundo');
        resp.write(JSON.stringify(salida));
        resp.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');