const appConfig = require('../config/app');

const AuthorizationController = {
  login: (req, res) => {
    const authorizationURL = `${
      appConfig.authorizationHost
    }/authorize?response_type=code&client_id=${
      appConfig.clientID
    }&redirect_uri=${encodeURIComponent(
      appConfig.redirectURL
    )}&state=1234&scope=openid%20profile%20email.com`;
    res.redirect(authorizationURL);
  },
};
module.exports = AuthorizationController;
