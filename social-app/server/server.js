const express = require('express');
const server = express();
const winston = require('winston');
const { mongoDb } = require('./connection/db');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: 'config/.env' });
}
mongoDb();
require('./start/logging')();
require('./start/routes')(server);
require('./cronjob')();


server.listen(process.env.PORT, () => winston.info(`Server is working on http://localhost:${process.env.PORT}`));
