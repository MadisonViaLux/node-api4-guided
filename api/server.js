const express = require('express');
const helmet = require('helmet');

require('dotenv').config('development')

console.log('environment', process.env.NODE.ENV)

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

module.exports = server;
