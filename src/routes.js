const express = require("express");
const routes = express.Router();
const members = require('./app/controllers/members');

routes.get('/', function(req, res) {
    return res.redirect('/members')
});


routes.get('/members', members.index);
routes.get('/members/create', members.create);

routes.post('/members', members.post);

module.exports = routes;