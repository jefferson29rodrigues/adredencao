const express = require("express");
const routes = express.Router();
const members = require('./app/controllers/members');

routes.get('/', function(req, res) {
    return res.redirect('/members')
});


routes.get('/members', members.index);
routes.get('/members/create', members.create);
routes.get('/members/:id', members.show)
routes.get('/members/:id/edit', members.edit)

routes.post('/members', members.post);
routes.put('/members', members.put);
routes.delete('/members', members.delete);

module.exports = routes;