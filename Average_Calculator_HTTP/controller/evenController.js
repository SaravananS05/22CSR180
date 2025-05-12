const express = require('express');

function evenController(req, res) {
    const arr = [];
    for (let i = 0; i < 10; i += 2) {
        arr.push(i);
    }
    res.send(arr);
}

module.exports = evenController;
