const appConfig = require('../config/app');
const axios = require('axios');

const AuthorizationController = {
  login: (req, res) => {
    const authorizationURL = `${
      appConfig.authorizationHost
    }/authorize?response_type=code&client_id=${
      appConfig.clientID
    }&redirect_uri=${encodeURIComponent(
      appConfig.redirectURL
    )}&scope=openid%20profile%20email`;
    res.redirect(authorizationURL);
  },

  callback: async (req, res) => {
    const response = await fetch(`${appConfig.authorizationHost}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: appConfig.clientID,
        client_secret: appConfig.clientSecret,
        redirect_uri: appConfig.redirectURL,
        scope: 'openid profile email',
        code: req.query.code,
      }),
    });

    const json = await response.json();

    res.json(json);
  },
};
module.exports = AuthorizationController;
