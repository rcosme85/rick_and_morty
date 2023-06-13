/* const axios = require('axios');
const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response = response.data))
    .then((data) => {
      const character = {id: data.id, name: data.name, gender: data.gender, species: data.species, origin: data.origin, image: data.image, status: data.status};
      return res.writeHead(200, { "content-type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((error) => {
      return res.writeHead(500, { "content-type": "text/plain" })
        .end(error.message);
    });
} */
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios(`${URL}/${id}`)
    const { status, name, species, origin, image, gender } = response.data;
    const character = { id, status, name, species, origin, image, gender }
    return name
      ? res.status(200).json(character)
      : res.status(404).send("Not found")
    
  } catch (error) {
    return res.status(500).send(error.message)
  }
  
}
//***** PROMESAS *******
/* function getCharById(req, res) {
  const { id } = req.params;
  axios(`${URL}/${id}`)
    .then(response => response.data)
    .then((data) => {
      if (data.name) {
        const character = {id: data.id, status: data.status, name: data.name, species: data.species, origin: data.origin, image: data.image, gender: data.gender
        }
        return res.status(200).json(character)
      }
      return res.status(404).send("Not fount")
    })
  .catch(error => res.status(500).send(error.message))
} */

module.exports =  getCharById;