const axios = require('axios');
const chai = require('chai');
const chai_http=require('chai-http');
const nock = require('nock');

const app = require("./../../../app");
chai.use(chai_http);

axios.default.adapter = 'http';

 describe("Realizando un test con nock", () => { 
    beforeEach(() => {
        nock.cleanAll()
    });
    it(`probando la peticion`, async () => {
        const scope = nock("http://locahost:3000")
            .get('/pokemons')
            .reply(200, "test response");
        const { status,data } = await axios.get("http://locahost:3000/pokemons");
        chai.assert.equal(status, 200);
        chai.assert.equal(data,'test response');
        scope.done();
    });
}); 

describe("Realizando un test con nock", () => {
    beforeEach(() => {
        nock.cleanAll()
    });

    it(`error 400`, async () => {
        const URL = "http://locahost:3000";
        const scope = nock(URL)
            .get('/pokemons')
            .reply(400, "Error red");
        const res = await chai.request("http://locahost:3000").get("/pokemons");
        chai.assert.equal(res.statusCode, 400);
    });
});