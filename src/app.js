const express = require('express');

const stringsRouter = require('./stringsRouter');

const numbersRouter = require('./numbersRouter');

const arraysRouter = require('./arraysRouter');

const booleansRouter = require('./booleansRouter');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouter);

app.use('/numbers', numbersRouter);

app.use('/arrays', arraysRouter);

app.use('/booleans', booleansRouter);

module.exports = app;
