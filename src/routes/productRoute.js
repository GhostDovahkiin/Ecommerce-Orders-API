'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const authService = require('../services/auth-service');

router.post('/', authService.isAdmin, controller.post);

router.put('/:id', authService.isAdmin, controller.put);

router.delete('/:id', authService.isAdmin, controller.delete);

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/tags/:tag', controller.getByTag);
router.get('/admin/:id', controller.getById);



module.exports = router;