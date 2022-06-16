'use strict';


const { sequelize, clothesModel,foodModel } = require('./src/models');

const server = require('./src/server');

sequelize.sync()
  .then(() => {
    console.log('Successful Connection!!!');
    // if you want to seed, be careful - this will happen every time you start your server
    // clothesModel.create({ name: 'Ryan', age: 47, eyeColor:'brown' });
    foodModel.create({ vegetables: 'carrots', meat:'chicken',fruit:'strawberry' });
  })
  .catch(err => console.error(err));

server.start();