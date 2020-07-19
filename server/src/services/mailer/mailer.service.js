// Initializes the `mailer` service on path `/mailer`
const createService = require('./mailer.class.js');
const hooks = require('./mailer.hooks');
const filters = require('./mailer.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'mailer',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/mailer', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mailer');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
