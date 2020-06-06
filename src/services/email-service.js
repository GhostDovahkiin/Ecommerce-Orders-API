'use strict';
require('dotenv').config();
var config = require('../config');
var sgmail = require('@sendgrid/mail');
sgmail.setApiKey(process.env.SENDGRID_KEY);

exports.send = async (to, subject, body) => {
  sgmail.send({
    to: to,
    from: 'phenrique615@gmail.com',
    subject: subject,
    text: "Olá, seja bem vindo a DRACO Imports!",
    html: body
  });
}