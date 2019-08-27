const { LocationModel } = require('../database');

const getlocation = async id => {
    const locations = await LocationModel.findAll();
    return locations
}

const addLocation = async payload => {
    return LocationModel.create({ 
         name: payload.location
    });
}

module.exports = {
    getlocation,
    addLocation
}