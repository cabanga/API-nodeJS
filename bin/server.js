"use stricts"

const app = require("../src/app");
const http = require("http");
const debug = require("debug")("nodestr:server");

const port = 4040;
app.set("port", port);

const server = http.createServer(app);






server.listen(port);
console.log('API rodando na porta', port);
