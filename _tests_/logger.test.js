'use strict';

const logger = require('../src/middleware/logger');

describe('Testing the logger middleware', () => {
  
  let req = {method: 'GET'};
  let res = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('should be able to log a GET method', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
