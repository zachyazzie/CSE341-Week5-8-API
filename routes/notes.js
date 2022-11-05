const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notes');
const validation = require('../middleware/validate');
const loadUser = require('../middleware/loadUser');

router.use([loadUser]);

router.get('/all', notesController.getAllUserNotes);

router.get('/one', notesController.getNewestUserNote);

router.post('/create', notesController.createNote);

router.put('/edit/:postId', notesController.editNote);

router.delete('/delete/:postId', notesController.deleteNote);

module.exports = router;
