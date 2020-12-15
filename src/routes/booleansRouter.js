const express = require('express');

const booleansRouter = express.Router();

const {
  negateController,
  truthinessController,
  isOddController,
  startsWithController,
} = require('../controllers/booleansControllers');

booleansRouter.post('/negate', negateController);

booleansRouter.post('/truthiness', truthinessController);

booleansRouter.get('/is-odd/:number', isOddController);

booleansRouter.get('/:string/starts-with/:character', startsWithController);

module.exports = booleansRouter;
