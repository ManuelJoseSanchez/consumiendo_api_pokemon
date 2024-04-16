const sinon = require('sinon');
const chai=require('chai');

const app = require('./../../../app');

const { mockApiGet }=require('./../util/util');

const hello = function () { 
        return "Hello :) !";
}



describe("Realizando un test con sinon", () => {        

    const sandbox = sinon.createSandbox();
    
    beforeEach(() => {
        sandbox.spy(getListService);
    });

    afterEach(() => { 
        sandbox.restore();
    });

    it(`probando la peticion`, async() => {
        
    });
});