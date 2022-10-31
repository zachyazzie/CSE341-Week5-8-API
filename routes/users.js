const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const validation = require('../middleware/validate');

router.get('/all', usersController.getAllUsers);

router.get('/:postId', usersController.getOneUser);

router.post('/', validation.user, usersController.createUser);

router.put('/:postId', validation.user, usersController.updateUser);

router.delete('/:postId', usersController.deleteUser);

module.exports = router;
