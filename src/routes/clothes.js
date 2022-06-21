'use strict';


const express = require('express');
const { clothesModel } = require('../models');

const router = express.Router();


router.post('/clothes', async (req, res, next) => {
  let person = req.body;

  //query to the database
  let response = await clothesModel.create(person);
  res.status(200).send(response);
});

// get
router.get('/clothes', async (req, res, next) => {
  let allPeople = await clothesModel.findAll();
  res.status(200).send(allPeople);
});

// get one
router.get('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;
  let onePerson = await clothesModel.findOne({where: { id }});
  res.status(200).send(onePerson);
});

// put
router.put('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;

  let updatedPerson = await clothesModel.findOne({where: { id }});
  await clothesModel.update(req.body, {where: { id }});
  res.status(200).send(updatedPerson);
});

// delete
router.delete('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedPerson = await clothesModel.findOne({where: { id }});

  await clothesModel.destroy({where: { id }});
  res.status(200).send(deletedPerson);
});

module.exports = router;