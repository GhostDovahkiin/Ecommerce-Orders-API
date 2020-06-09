'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const router = express.Router();

// conecta ao banco
mongoose.connect(process.env.MONGO_STRING, {
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

app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use("/", indexRoute);
app.use("/orders", orderRoute);
app.use("/products", productRoute);
app.use("/customers", customerRoute);

module.exports = app;