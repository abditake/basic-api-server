'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

let person = {
  name: 'abdi',
  age: 42,
  eyeColor: 'brown',
};

let meal = {
  vegetables: 'potatoes',
  meat: 'chicken',
  fruits: 'apple',
};

describe('Testing REST API', () => {
  
  describe('Person Route ', ()=> {
    test('Create a person', async() => {
      let response = await mockRequest.post('/clothes').send(person);
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('abdi');
      expect(response.body.age).toEqual(42);
      expect(response.body.eyeColor).toEqual('brown');
    });
  
    test('Should read from people', async () => {
      let response = await mockRequest.get('/clothes').send(person);
  
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('abdi');
      expect(response.body.age).toEqual(42);
      expect(response.body.eyeColor).toEqual('brown');
  
    });
  });

  describe('Food Route ', ()=> {
    test('Create a food', async() => {
      let response = await mockRequest.post('/food').send(meal);
  
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('potatoes');
      expect(response.body.age).toEqual('chicken');
      expect(response.body.eyeColor).toEqual('apple');
    });
  });
});
