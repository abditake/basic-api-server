'use strict';


const express = require('express');
const { clothesModel } = require('../models');

const router = express.Router();


router.post('/clothes', async (req, res, next) => {
  let customer = req.body;
  console.log(req.body);

  //query to the database
  let response = await clothesModel.create(customer);
  res.status(200).send(response);
});

// get
router.get('/clothes', async (req, res, next) => {
  let allCustomers = await clothesModel.findAll();
  res.status(200).send(allCustomers);
});

// get one
router.get('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneCustomer = await clothesModel.findOne({where: { id }});
  res.status(200).send(oneCustomer);
});

// put
router.put('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;

  let updatedCustomer = await clothesModel.findOne({where: { id }});
  await clothesModel.update(req.body, {where: { id }});
  res.status(200).send(updatedCustomer);
});

// delete
router.delete('/clothes/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedCustomer = await clothesModel.findOne({where: { id }});

  await clothesModel.destroy({where: { id }});
  res.status(200).send(deletedCustomer);
});

module.exports = router;