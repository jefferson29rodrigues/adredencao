// const { age, date } = require('./utils')
const Member = require('../models/Member');


// // index 
module.exports = {
     index(req, res){
        
        Member.all(function(dadosDoBanco) {
            console.log(dadosDoBanco)

            return res.render("members/index", {dadosDoBanco})
        })        

    },
    show(req, res){
        
        Member.mostrarUm(req.params.id, function(dadosDoBanco) {

            console.log(dadosDoBanco)

            return res.render('members/show', {dadosDoBanco})
        })

    },
    create(req, res){
        
        return res.render('members/create')
    },
    post(req, res){

        Member.create(req.body, function(criadoNoBanco) {
            console.log(criadoNoBanco)

            return res.redirect(`/members`)
        })

    }
}