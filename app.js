const express = require('express');
const app = express();

app.use("/api/", require('./src/router/index.routers'));

app.use("/api/pokemon", require('./src/router/pokemon.router'));

if (!module.parent) { 
   app.listen(3000);
}
module.exports = app;