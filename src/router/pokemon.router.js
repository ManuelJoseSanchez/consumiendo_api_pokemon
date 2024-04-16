const { Router } = require('express');

const { getList } = require('./../controller/PokemonsController');

const route = Router();

route.get("/", getList);

module.exports = route;