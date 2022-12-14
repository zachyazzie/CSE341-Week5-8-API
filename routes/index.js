const routes = require('express').Router();
const users = require('./users');
const notes = require('./notes');
const swagger = require('./swagger');
const authorizationRoutes = require('./authorization');

routes.use('/', swagger);
routes.use('/users', users);
routes.use('/notes', notes);
routes.use('/authorization', authorizationRoutes);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://yazzie-journal-api.onrender.com/api-docs',
    };
    res.send(docData);
  })
);

module.exports = routes;
