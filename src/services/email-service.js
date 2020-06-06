'use strict';

var config = require('../config');
var sgmail = require('@sendgrid/mail');
sgmail.setApiKey(config.sendGridKey);

exports.send = async (to, subject, body) => {
  sgmail.send({
    to: to,
    from: 'phenrique615@gmail.com',
    subject: subject,
    text: "Olá, seja bem vindo a DRACO Imports!",
    html: body
  });
}