const express = require('express');

const app = express();

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

app.get('/', (req, res) => {
    res.send({status: 'API Works'});
});

app.post('/location', (req, res) => {
    const { body } = req;
    res.send({location: getLocation(body.location)});
});

app.listen(process.env.PORT, () => {
    console.log('-----------------------------------------------');
    console.log(`|      RUNNING ON ${process.env.PORT}                    |`);
    console.log('-----------------------------------------------');
});