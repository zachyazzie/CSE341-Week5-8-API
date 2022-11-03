const NotesController = {
  index: (req, res) => {
    res.json(req.user.notes);
  },
};

module.exports = NotesController;
