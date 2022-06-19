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

describe('Testing REST API METHODS', () => {
  test('Test on Post Method', async () => {
    let response = await mockRequest.get('./clothes').send(person);
    console.log(response);
    expect(response.method).toEqual('GET');
  });
});
