const mongoose = require('mongoose');
const winston = require('winston');

exports.mongoDb = () => {
    mongoose.connect(process.env.MONGO_URI).
        then(connection => winston.info(`Database connection: ${connection.connection.host}`)).
        catch(error => winston.error(error));
}