const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notes');
const validation = require('../middleware/validate');
const loadUser = require('../middleware/loadUser');

router.use([loadUser]);

router.get('/all', notesController.getAllUserNotes);

router.post('/', notesController.createNote);

module.exports = router;
