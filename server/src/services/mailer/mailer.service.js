// Initializes the `mailer` service on path `/mailer`
const hooks = require('./mailer.hooks');
const Mailer = require('feathers-mailer');
const smtpTransport = require('nodemailer-smtp-transport');

require('dotenv').config();

module.exports = function (app) {
  app.use(
    '/mailer',
    Mailer(
      smtpTransport({
        // gmail account security needs to be set to less secure.
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      })
    )
  );

  const service = app.service('mailer');
  service.hooks(hooks);
};
