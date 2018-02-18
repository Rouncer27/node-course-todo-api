var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI );


module.exports = { mongoose };

//  process.env.NODE_ENV === 'production' Heroku
//  process.env.NODE_ENV === 'development' local run
//  process.env.NODE_ENV === 'text' mocha test run