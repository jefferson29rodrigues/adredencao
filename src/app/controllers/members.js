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