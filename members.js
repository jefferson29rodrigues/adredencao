const fs = require('fs');
const data = require("./data.json")
const { age, date } = require('./utils')

// index 
exports.index = function(req, res) {
    
    const membros = data.membros;

    return res.render("members", {membros})
}

//show
exports.show = function(req, res) {
    // req.query.id
    // req.body
    // req.params.id = /:id

    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor) {
        return id == instructor.id
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    

    const instructor = {
      ...foundInstructor,
      age: age(foundInstructor.birth),
      services: foundInstructor.services.split(","),
      created_at: new Intl.DateTimeFormat("en-GB").format(foundInstructor.created_at),
    }

    return res.render("instructors/show", { instructor })

}

// create
exports.post = function(req, res) {

    const keys = Object.keys(req.body)

   for(key of keys) {
       //req.body.avatar_url == "";
       if (req.body[key] == "") {
           return res.send('Please, fill all')
       }
   }

   let {
       image,
       birth, 
       gender, 
       services,
       nome,
       endereco,
       numero,
       complemento,
       bairro,
       cep,
       cidade,
       estado,
       pais,
       nomePai,
       nomeMae,
       sexo,
       rg,
       cpf,
       dataNascimento,
       batismo,
       uniao,
       estadoCivil,
       profissao,
       empregado,
       escolaridade,
       email,
       foneResidencial,
       foneComercial,
       celular,
       foneRecados,
       veioDe,
       posicao,
       eDirigente
    } = req.body

   birth = Date.parse(birth)
   const created_at = Date.now()
   const id = Number(data.instructors.length + 1)

   

   // na 1° [] -> [{...}] na 2° [{...}] -> [{...}, {...}] 
   data.instructors.push({
        id,
        image,
        birth,
        gender,
        services,
        created_at,
        nome,
        endereco,
        numero,
        complemento,
        bairro,
        cep,
        cidade,
        estado,
        pais,
        nomePai,
        nomeMae,
        sexo,
        rg,
        cpf,
        dataNascimento,
        batismo,
        uniao,
        estadoCivil,
        profissao,
        empregado,
        escolaridade,
        email,
        foneResidencial,
        foneComercial,
        celular,
        foneRecados,
        veioDe,
        posicao,
        eDirigente
   }) //  na 3° [{...}, {...}] -> [{...}, {...}, {...}]

   fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
       if (err) return res.send("write file error!")

       return res.redirect("/members")
   });

    //return res.send(req.body)
}

// edit
exports.edit = function(req, res) {
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor) {
        return id == instructor.id
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth) // 2000-2-1
    }

    return res.render('instructors/edit', { instructor })
}

// update

// delete