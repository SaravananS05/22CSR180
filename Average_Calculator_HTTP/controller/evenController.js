const express = require('express');
const evenService = require('../service/evenService')

let windowPrevState = [];
let windowCurrState = [];
let numbers = [];
function evenController(req, res) {
    numbers = evenService();

    res.status(201).json({
        "windowPrevState" : windowPrevState,
        "windowCurrState" : windowCurrState,
        "numbers" : numbers,
    })
}

module.exports = evenController;