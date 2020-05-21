'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// conecta ao banco
mongoose.connect('mongodb+srv://hearthfire:thesims2@clusterpicudo-s9otl.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


// carrega os models
const Product = require('./models/products');

// Carrega rotas
const indexRoute = require('./routes/indexRoute');
const productRoute = require('./routes/productRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;