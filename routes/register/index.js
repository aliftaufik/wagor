const register = require('express').Router();

const controller = require('../../controllers');

register.get('/', controller.UserController.getRegister); //peratama masuk berisi form
register.post('/', controller.UserController.postRegister); //kalo submit langsung balik ke home

module.exports = register;
