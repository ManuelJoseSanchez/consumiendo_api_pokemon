const express = require('express');
const app = express();

app.use("/api", require('./src/router/index.routers'));

app.use("/pokemons/", require('./src/router/pokemon.routers'));

if (!module.parent) { 
   app.listen(3000, () => console.log('http://locahost:3000'));
}
module.exports = app;