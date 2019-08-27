const { Router } = require('express');
const {user, location} = require('../queries')

const api = Router();

const getLocation = location => {
    switch (location.toLowerCase()) {
        case 'nairobi':
            return 'Land of cold waters';
        case 'new york':
            return 'Big Apple';
        case 'kisumu':
            return 'United Kisumu';
        case 'mombasa':
            return 'Mombasa raha';
        default:
            return 'No data for this';
    }
}

api.get('/', (req, res) => {
    res.status(200).send({status: 'API Works'});
});

api.post('/location', async (req, res) => {
    const { body } = req;
    const resp = await location.addLocation(body);
    res.status(200).send({location: resp});
});

api.get('/getlocations', async (req, res) => {
    res.status(200).send({location: location.getlocation()})
})

module.exports = api;