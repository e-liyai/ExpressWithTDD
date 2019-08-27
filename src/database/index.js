const Sequelize = require('sequelize');
const config = require('../config/config');
const User = require('../module/User');
const Location = require('../module/Location');
const UserLocation = require('../module/UserLocation');

const sequelize = new Sequelize(config[process.env.ENV]);

const UserModel = User(sequelize, Sequelize);
const LocationModel = Location(sequelize, Sequelize);
const UserLocationModel = UserLocation(sequelize, Sequelize);

UserModel.belongsToMany(LocationModel, { through: UserLocationModel, unique: false })
LocationModel.belongsToMany(UserModel, { through: UserLocationModel, unique: false })
UserModel.belongsTo(LocationModel);

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  });

  module.exports = {
      UserModel,
      LocationModel,
      UserLocationModel
  } 
