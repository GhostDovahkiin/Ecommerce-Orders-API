'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validators');
const repository = require('../repository/product-repository');

exports.get = (req, res, next) => {
  repository
    .get()
    .then(data => {
      res.status(200).send(data);
    }).catch(e => {
      res.status(400).send(e);
    });
}

exports.getBySlug = (req, res, next) => {
  repository
    .getBySlug(req.params.slug)
    .then(data => {
      res.status(200).send(data);
    }).catch(e => {
      res.status(400).send(e);
    });
}

exports.getById = (req, res, next) => {
  repository
    .getById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    }).catch(e => {
      res.status(400).send(e);
    });
}

exports.getByTag = (req, res, next) => {
  repository
    .getByTag(req.params.tag)
    .then(data => {
      res.status(200).send(data);
    }).catch(e => {
      res.status(400).send(e);
    });
}

exports.post = (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
  contract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracteres');
  contract.hasMinLen(req.body.description, 10, 'A descrição deve conter pelo menos 10 caracteres');

  if (contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  repository
    .create(req.body)
    .then(x => {
      res.status(201).send({
        message: 'Produto cadastrado com sucesso!'
      });
    }).catch(e => {
      res.status(400).send({
        message: 'Falha ao cadastrar produto'
      });
    });
};


exports.put = (req, res, next) => {
  repository
    .update(req.params.id, req.body)
    .then(x => {
      res.status(201).send({
        message: "Produto atualizado com sucesso!"
      });
    }).catch(e => {
      res.status(400).send({
        message: "Falha ao atualizar o produto.",
        data: e
      });
    });
}

exports.delete = (req, res, next) => {
  repository
    .delete(req.body.id)
    .then(x => {
      res.status(200).send({
        message: "Produto removido com sucesso!"
      });
    }).catch(e => {
      res.status(400).send({
        message: "Falha ao remover o produto.",
        data: e
      });
    });
}