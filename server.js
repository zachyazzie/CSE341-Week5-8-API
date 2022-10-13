const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8080;

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'));
//Connect to DB

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  })
  .catch((err) => {
    console.error('Error connecting to Mongo', err);
  });
