const User = require('../src/module/User')
const expect = require('chai').expect
const pgDatabase = require('../src/database');

describe('User module', () => {
  describe('"up"', () => {
    it('should export a function', (done) => {
      expect(User.up).to.be.a('function');
      done();
    })
    it('should be able to create table', async (done) => {
        const created = await User.up();
        console.log('~~~~~~~~~~~~~~ ', created)
        const userTable = await pgDatabase.schema.hasTable('Users');
        expect(userTable).to.be.true
        done();
    })
  })
})