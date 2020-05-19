'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;