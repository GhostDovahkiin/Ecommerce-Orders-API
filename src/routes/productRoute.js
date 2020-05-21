'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/tags/:tag', controller.getByTag);
router.get('/admin/:id', controller.getById);



module.exports = router;