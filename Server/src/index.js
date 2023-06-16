/* var http = require("http");
const { getCharById } = require("./controllers/getCharById.js");
const PORT = 3001;

http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
   if (req.url.includes('/rickandmorty/character')) {
    const id = req.url.split('/').at(-1)
     getCharById(res, +id)
  } 
}).listen(PORT, "localhost")  */
const { conn } = require("./DB_connection");
const server = require('../src/app');
//const { sequelize } = require("sequelize");
const PORT = 3001

conn.sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("server raised in port: " + PORT);
    });
  })
  .catch(error => console.log(error.message))

