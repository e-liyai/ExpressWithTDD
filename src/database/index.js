const Sequelize = require('sequelize');
const config = require('../config/config');
const User = require('../module/User');
const location = require('../module/location');

const sequelize = new Sequelize(config[process.env.ENV]);

const UserModel = User(sequelize, Sequelize);
const LocationModel = location(sequelize, Sequelize);
UserModel.belongsTo(LocationModel);

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  });

  module.exports = {
      UserModel,
      LocationModel
  } 
