const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notes');
const validation = require('../middleware/validate');
const loadUser = require('../middleware/loadUser');

router.use([loadUser]);

router.get('/all', notesController.getAllUserNotes);

router.get('/one', notesController.getNewestUserNote);

router.post('/create', validation.note, notesController.createNote);

router.put('/edit/:postId', validation.note, notesController.editNote);

router.delete('/delete/:postId', notesController.deleteNote);

module.exports = router;
