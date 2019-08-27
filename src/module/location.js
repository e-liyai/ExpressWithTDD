module.exports = (sequelize, type) => {
    return sequelize.define('location', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING
    });
};