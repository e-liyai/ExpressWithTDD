const { Router } = require('express');

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

api.post('/location', (req, res) => {
    const { body } = req;
    res.status(200).send({location: getLocation(body.location)});
});

module.exports = api;