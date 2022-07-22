const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;