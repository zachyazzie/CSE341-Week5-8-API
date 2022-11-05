const validator = require('../helpers/validate');

const user = async (req, res, next) => {
  const validationRule = {
    identifier: 'string',
    email: 'required|string',
    givenName: 'required|string',
    familyName: 'required|string',
    locale: 'required|string',
    picture: 'string',
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      console.log('broken');
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err,
      });
    } else {
      next();
    }
  }).catch((err) => console.log('broken'));
};

const note = async (req, res, next) => {
  const validationRule = {
    identifier: 'string',
    entry: 'required|string',
    date: 'required|string',
    location: 'required|string',
    image: 'required|string',
    mood: 'required|string',
    tags: 'required|string',
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      console.log('broken');
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err,
      });
    } else {
      next();
    }
  }).catch((err) => console.log('broken'));
};

module.exports = {
  user,
  note,
};
