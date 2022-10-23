const validator = require('../helpers/validate');

const user = async (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    email: 'required|email',
    phone: 'required|string',
    notes: 'array',
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

const login = async (req, res, next) => {
  const validationRule = {
    username: 'required|string',
    password: 'required|string|min:6',
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
  login,
};
