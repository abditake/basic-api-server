'use strict';


const express = require('express');
const { clothesModel } = require('../models');

const router = express.Router();


router.post('/clothes', async (req, res, next) => {
  let person = req.body;
  console.log(req.body);

  //query to the database
  let response = await clothesModel.select(person);
  res.status(200).send(response);
});


router.get('/clothes', async(req,res,next) =>{
  let clothes = req.query;
  
  res.status(200).send(clothes);
});

module.exports = router;