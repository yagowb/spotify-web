const express = require("express");
const app = express();
const path = require('path');


app.use("/imgs", express.static(path.join(__dirname, '/imgs')));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/home.html');
});

app.get("/FAQ", function(req, res) {
  res.sendFile(__dirname + "/FAQ.html");
});
  
app.get("/Cadastro", function(req, res)  {
  res.sendFile(__dirname + "/Cadastro.html");
});




//Inicialização do Servidor//
app.listen(process.env.PORT ? process.env.PORT : 5000);

