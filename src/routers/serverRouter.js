const express = require('express');
const { default: serverController } = require('../controllers/serverController');
//Importar server Controller
const ServerController = require('../controllers/serverController');

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.config()
    }
    config(){
        const objServerC = new ServerController.default();
        this.router.get("/register", objServerC.register);
    }
}

exports.default = ServerRouter;