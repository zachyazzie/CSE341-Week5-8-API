const routes = require('express').Router();
const users = require('./users');
const logins = require('./logins');
const swagger = require('./swagger');

routes.use('/', swagger);
routes.use('/users', users);
routes.use('/logins', logins);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://localhost:8080/api-docs',
    };
    res.send(docData);
  })
);

module.exports = routes;
