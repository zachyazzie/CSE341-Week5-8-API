const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Journal API',
    description: 'Test Journal API',
  },
  host: 'yazzie-journal-api.onrender.com',
  schemes: ['https'],
  components:
  securitySchemes:

    BearerAuth:
      type: http
      scheme: bearer
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
