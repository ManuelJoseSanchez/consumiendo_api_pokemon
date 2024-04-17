const { Router } = require('express');

const { getList } = require('../controller/PokemonsController');

const router = Router();

router.get("/", getList);

module.exports = router;