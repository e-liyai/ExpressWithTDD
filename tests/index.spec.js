const chai = require('chai')
const app = require('../src/app')
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

describe('test endpoint', () => {
    it('expect status respond', done => {
        chai.request(app).get('/api/v1/').end((req, res) => {
            expect(res.body.status).to.equal('API Works');
            done();
        });        
    })
    it('expect location slung name', done => {
        chai
            .request(app)
            .post('/api/v1/location')
            .send({location: 'nairobi'})
            .end((req, res) => {
                expect(res.body.location).to.equal(Object);
                done();
            })
    })
})