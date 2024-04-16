const chai = require('chai')
const chaiHttp = require('chai-http');

const app = require("./../../../app");

chai.use(chaiHttp);


describe("Povando el metodo get", () => {

    it("obteniendo una lista de pokemon", async () => { 
        const resul = await chai.request(app).get("/api");
        const { statusCode } = resul;
        chai.expect(resul).to.have.property("_body");
        chai.assert.equal(statusCode,200);
    });

    it("obteniedo un pokemon", async () => {
        const resultado = await chai.request(app).get("/api/5");
        const { statusCode } = resultado;
        chai.expect(resultado).to.have.property("_body");
        chai.assert.equal(statusCode,200);
    });

    it("Falla la obtencion de pokemon", async () => {
        const resultado = await chai.request(app).get("/api/100000000");
        const { statusCode } = resultado;
        chai.assert.equal(statusCode,404);
    });
});