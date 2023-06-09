const login  = require('../controllers/login')
const getCharById  = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
//const router = require("express").Router()
const { Router } = require("express");
const router = Router()

//router.get("/character/:id", getCharById);

 router.get("/character/:id", (req, res) => {
   getCharById(req, res);
 });
//http://localhost:3001/rickandmorty/login/
///rickandmorty/login
router.get("/login", (req, res) => {
  login(req, res);
});

router.post("/fav", (req, res) => {
  postFav(req, res);
});

router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
}); 
 
module.exports = router;

