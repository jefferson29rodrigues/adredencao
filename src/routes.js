const express = require("express");
const routes = express.Router();
const members = require('./members');

routes.get('/', function(req, res) {
    return res.redirect('members')
});

routes.get('/members/create', function(req, res) {
    return res.render('members/create')
});

routes.get('/members', members.index)

routes.get('/members/:id', members.show)

routes.get('/members/:id/edit', members.edit)

routes.post('/members', members.post);

module.exports = routes;