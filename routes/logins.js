const express = require('express');
const router = express.Router();

const loginsController = require('../controllers/logins');
const validation = require('../middleware/validate');

router.get('/', loginsController.getAllLogins);

router.get('/:postId', loginsController.getOneLogin);

router.post('/', validation.login, loginsController.createLogin);

router.put('/:postId', validation.login, loginsController.updateLogin);

router.delete('/:postId', loginsController.deleteLogin);

module.exports = router;
