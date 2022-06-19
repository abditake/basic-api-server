'use strict';

const error500 = require('./error-handlers/500');


module.exports = (req,res,next) => {
  const body = req.query.name;
  if(body){
    next();
  }else{
    next(error500);
  }
};