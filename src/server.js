'use strict';

const express = require('express');
const clothesRouter = require('./routes/clothes');
require('dotenv').config();

const app = express();


const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(clothesRouter);

app.get('/clothes',()=>{

});

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};



