const express = require('express');
var router = express.Router(); //interceptação das rotas
const usuarioController = require('../controllers/user-controller');


//Post
router.post("/", usuarioController.post);

//Get All
router.get("/", usuarioController.get);

//FindById
router.get("/:usuarioId", usuarioController.getById);

//Put
router.put("/:usuarioId", usuarioController.put);

//Delete
router.delete("/:usuarioId", usuarioController.delete);

module.exports = router;