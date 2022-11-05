const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const validation = require('../middleware/validate');
const loadUser = require('../middleware/loadUser');

router.use([loadUser]);

router.get('/', usersController.getUserInfo);

router.delete('/delete/:postId', usersController.deleteUser);

module.exports = router;
