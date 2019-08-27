const knex = require('knex');

const pg = knex({
    client: 'pg',
    connection: process.env.DB_URL
});

module.exports = pg