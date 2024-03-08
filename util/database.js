const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','sumansihare',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;