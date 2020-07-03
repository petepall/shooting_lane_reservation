const users = require('./users/users.service.js');

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.configure(users);
};
