'use strict';

const express = require('express');
const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');
const error404 = require('./middleware/error-handlers/404');
const error500 = require('./middleware/error-handlers/500');
require('dotenv').config();

const app = express();


const PORT = process.env.PORT || 3002;

app.use(logger);
app.use(express.json());
app.use(clothesRouter);
app.use(foodRouter);
app.use(validator);

app.use('*', error404);
app.use(error500);


module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};



