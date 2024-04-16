const { axios } = require('./../helpers'); 

const { response, request } = require("express");

const URL_API_POKEMON = 'https://pokeapi.co/api/v2/ability';

const getList = async (req, res = response) => {
    const resul = await axios.get(URL_API_POKEMON);
    const resultado = resul.data;
    res.status(200).json({  resultado });
}

const getPokemon = async (req = request, res = response) => {
    try {
        const { pokemon } = req.params;
        if (!pokemon)
            return res.sendStatus(404);
        const { data, statusCode } = await axios.get(`${URL_API_POKEMON}/${pokemon}`);
        if (statusCode === 404) {
            return res.sendStatus(404);
        }
        res.status(200).json({ data });
    } catch (error) {
        return res.sendStatus(404);
    }
}

module.exports = {
    getList,
    getPokemon,
}