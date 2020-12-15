const express = require('express');

const numbersRouter = express.Router();

const {
  addController,
  subtractController,
  multiplyController,
  divideController,
  remainderController,
} = require('../controllers/numbersControllers');

numbersRouter.get('/add/:firstNumber/and/:secondNumber', addController);

numbersRouter.get('/subtract/:firstNumber/from/:secondNumber', subtractController);

numbersRouter.post('/multiply', multiplyController);

numbersRouter.post('/divide', divideController);

numbersRouter.post('/remainder', remainderController);

module.exports = numbersRouter;
