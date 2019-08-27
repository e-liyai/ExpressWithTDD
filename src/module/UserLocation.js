module.exports = (sequelize, type) => {
    return sequelize.define('user_location', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }
    })
  }