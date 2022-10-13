const express = require('express');
const router = express.Router();

const loginsController = require('../controllers/logins');

router.get('/', loginsController.getAllLogins);

router.get('/:username', loginsController.getOneLogin);

router.post('/', loginsController.createLogin);

module.exports = router;
