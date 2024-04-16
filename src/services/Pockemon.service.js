const { axios } = require("./../helpers/index");
const URL_API_POKEMON = 'https://pokeapi.co/api/v2/ability';
const getListServices = async () => { 
    const resul = await axios.get(URL_API_POKEMON);
    const { data } = resul;
    return data;
}


module.exports = {
    getListServices,
}