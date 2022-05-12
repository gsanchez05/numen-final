const express = require('express');
const router = express.Router();
const { vistaPaises } = require('../controller/controller.js')

/* GET home page. */
router.get('/', vistaPaises);

module.exports = router;