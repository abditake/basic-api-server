'use strict';

const express = require('express');
const { foodSchema, foodModel } = require('../models');

const router = express.Router();


router.post('/food', async (req, res, next) => {
  let person = req.body;
  console.log(req.body);

  //query to the database
  let response = await foodSchema.create(person);
  res.status(200).send(response);
});

router.get('/food', async (req, res, next) => {
  let person = req.query;
  console.log(response);

  let response = foodModel.findAll();
  res.status(200).send(response);
});




module.exports = router;