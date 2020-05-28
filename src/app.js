'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conecta ao banco
mongoose.connect('mongodb+srv://hearthfire:thesims2@clusterpicudo-s9otl.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// carrega os models
const Customer = require('./models/customer');
const Product = require('./models/products');
const Order = require('./models/order');

// Carrega rotas
const indexRoute = require('./routes/indexRoute');
const productRoute = require('./routes/productRoute');
const customerRoute = require('./routes/customerRoute');
const orderRoute = require('./routes/orderRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/", indexRoute);
app.use("/orders", orderRoute);
app.use("/products", productRoute);
app.use("/customers", customerRoute);

module.exports = app;