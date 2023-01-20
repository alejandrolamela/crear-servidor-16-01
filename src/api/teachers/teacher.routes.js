// Esto es un modelo,

const express = require('express');
const controller = require('./teacher.controller');
const router = express.Router();

router.get('/', controller.indexGet);

router.post('/create', controller.createPost);
router.put('/edit/:id', controller.editPut);
module.exports = router;