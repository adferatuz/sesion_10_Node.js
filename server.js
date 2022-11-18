const op = require("./operaciones.js")

"use strict";
var http = require("http");

/*
var server = http.createServer(function (req, res) {

  res.writeHead(200, { "content-type": "text/plain" });
  const asJson = {
    nombre: "julian",
    apellido: "céspedes",
  };
  res.end(JSON.stringify(asJson));
});
*/
var server = http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Resultado "+op.suma(3,4)+" "+ "Nombre es: "+ op.getNombre()+" Si se modifico");

});

server.listen(8080);