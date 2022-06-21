'use strict';

const express = require('express');
const { foodModel } = require('../models');


const router = express.Router();


router.post('/food', async (req, res, next) => {
  let meal = req.body;
  //query to the database
  let response = await foodModel.create(meal);
  res.status(200).send(response);
});

// get
router.get('/food', async (req, res, next) => {
  let allMeals = await foodModel.findAll();
  res.status(200).send(allMeals);
});

// get one
router.get('/food/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneMeal = await foodModel.findOne({where: { id }});
  res.status(200).send(oneMeal);
});

// put
router.put('/food/:id', async (req, res, next) => {
  let { id } = req.params;

  let updatedMeal = await foodModel.findOne({where: { id }});
  await foodModel.update(req.body, {where: { id }});
  res.status(200).send(updatedMeal);
});

// delete
router.delete('/food/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedMeal = await foodModel.findOne({where: { id }});

  await foodModel.destroy({where: { id }});
  res.status(200).send(deletedMeal);
});



module.exports = router;