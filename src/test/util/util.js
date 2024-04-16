const nock = require('nock');

const mockApiGet = (app, url, response) => nock(api)
    .get(url)
    .reply(response.status, response.body);

module.exports = {
    mockApiGet,
};