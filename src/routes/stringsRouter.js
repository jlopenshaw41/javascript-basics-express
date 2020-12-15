const express = require('express');

const stringsRouter = express.Router();

const {
  hello,
  upper,
  lower,
  firstCharactersController,
} = require('../controllers/stringsControllers');

stringsRouter.get('/hello/:string', hello);

stringsRouter.get('/upper/:string', upper);

stringsRouter.get('/lower/:string', lower);

stringsRouter.get('/first-characters/:string', firstCharactersController);

module.exports = stringsRouter;
