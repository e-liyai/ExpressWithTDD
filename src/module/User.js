const pgDatabase = require('../database');

const TABLE_NAME = 'Users';

const up = () => {
  return pgDatabase.schema.createTableIfNotExists(TABLE_NAME, table => {
    table.increments()
    table.string('firstname')
    table.string('lastname')
    table.string('location')
    table.timestamps()
  });
};

module.exports = {
  up
}