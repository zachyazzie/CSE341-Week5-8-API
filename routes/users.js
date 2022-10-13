const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAllUsers);

router.get('/:postId', usersController.getOneUser);

router.post('/', usersController.createUser);

//router.put('/:postId', usersController.updateContact);

//router.delete('/:postId', usersController.deleteContact);

module.exports = router;
