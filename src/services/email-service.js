'use strict';

var config = require('../config');
var sgmail = require('@sendgrid/mail');
sgmail.setApiKey(config.sendGridKey);

exports.send = async (to, subject, text, body) => {
  sgmail.send({
    to: to,
    from: 'pedro.sousa@dcx.ufpb.br',
    subject: subject,
    text: text,
    html: body
  });
}