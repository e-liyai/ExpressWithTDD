const { UserModel } = require('../database');

const getUsers = async id => {
    const users = await UserModel.findAll();
    return users;
}

const addUser = async payload => {
    return LocationModel.create({ 
        firstname: payload.firstname,
        lastname: payload.lastname
    });
}

module.exports = {
    getUsers,
    addUser
}