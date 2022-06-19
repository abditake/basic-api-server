'uses strict';

// in this example, lets just export an anonymous function
module.exports = function (err, req, res, next){
  const error = err.message ? err.message : err;
  res.status(500).send(error);
};
