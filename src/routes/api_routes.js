'use-strict'

var express = require('express');

// Llamamos al router
var api = express.Router();

api.get('/users', (req,res)=>{
    res.send("User page");
});

module.exports = api;