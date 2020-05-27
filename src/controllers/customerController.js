'use strict';

const ValidationContract = require('../validators/fluent-validators');
const repository = require('../repository/customer-repository');

exports.post = async (req, res, next) => {
  /*let contract = new ValidationContract();
  contract.hasMinLen(req.body.name, 3, 'O Nome deve conter pelo menos 3 caracteres');
  contract.hasMinLen(req.body.email, 3, 'O email digitado é inválido');
  contract.hasMinLen(req.body.password, 8, 'A senha deve conter pelo menos 8 caracteres');

  if (contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }
  */
  try {
    await repository.create(req.body)
    res.status(201).send({
      message: 'Cliente cadastrado com sucesso!'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};