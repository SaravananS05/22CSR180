const express = require('express');
const evenController = require('../controller/evenController');
const evenRouter = express.Router();
evenRouter.get('/e',evenController);

module.exports = evenRouter;