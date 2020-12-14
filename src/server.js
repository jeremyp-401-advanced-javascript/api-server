'use strict';

// Create an Express server instance named 'app'
require('dotenv').config(); // Access .env to read in environmental variables
const express = require('express'); // JS server library
const mongoose = require('mongoose'); // Mongo interaction library
let app = express();

// New instance of the collection
const TacoCollection = require('./models/TacoCollection');
const DrinkCollection = require('./models/DrinkCollection');

// Mongoose Options
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI, options);

// Localize Middleware Modules
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handler/404');
const serverErrorHandler = require('./error-handler/500');
const drinkRoutes = require('./routes/drink-routes');
const tacoRoutes = require('./routes/taco-routes');

// Attach Middleware
app.use(express.json());
app.use(logger);
app.use(tacoRoutes);
app.use(drinkRoutes);
// Error Handler Middleware
app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  server: app, // Used by testing
  start: port => { // Takes port from index.js, starts server.
    if(!port) { throw new Error('missing port');}
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  },
};