const express = require('express');
const app = express();

app.use("/api/",require('./src/router/index.routers'))

if (!module.parent) { 
   app.listen(3000);
}
module.exports = app;