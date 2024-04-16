const { Router } = require('express');

const { getList,getPokemon } = require("./../controller/PokemonController");

const router = Router();

router.get("/", getList);
router.get("/:pokemon", getPokemon);

module.exports = router;