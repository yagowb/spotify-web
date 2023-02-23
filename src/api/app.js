const express = require("express");
const app = express();
const path = require('path');


app.use("../src/imgs", express.static(path.join(__dirname, '../src/imgs')));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '../src/home.html');
});

app.get("/FAQ", function(req, res) {
  res.sendFile(__dirname + "../src/FAQ.html");
});
  
app.get("/Cadastro", function(req, res)  {
  res.sendFile(__dirname + "../src/Cadastro.html");
});




//Inicialização do Servidor//
app.listen(process.env.PORT ? process.env.PORT : 5000);


module.exports = app.js;