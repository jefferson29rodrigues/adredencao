const db = require('../../config/db');

module.exports = {
    all(callback) {

        db.query('SELECT * FROM membros', function(err, results) {
            if(err) throw `Database Error ${err}`

            callback(results.rows)
        })
    },
    create(dadosDoFront, callback) {

        const query = `
            INSERT INTO membros (
                nome,
                endereco,         
                numero,
                complemento,
                bairro,
                cep,
                cidade,
                estado,
                pais,
                nomemae,
                rg,
                cpf,
                datanascimento,
                databatismo,
                estadocivil,
                datauniao,
                empregado,
                profissao,
                escolaridade,
                email,
                foneresidencial,
                celular,
                fonerecados,
                veiodaigreja,
                posicao,
                edirigente               
            ) 
            VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7,
                $8,
                $9,
                $10,
                $11,
                $12,
                $13,
                $14,
                $15,
                $16,
                $17,
                $18,
                $19,
                $20,
                $21,
                $22,
                $23,
                $24,
                $25,
                $26              
            )
            RETURNING id
        `

        const values = [
            dadosDoFront.nome,
            dadosDoFront.endereco,
            dadosDoFront.numero,
            dadosDoFront.complemento,
            dadosDoFront.bairro,
            dadosDoFront.cep,
            dadosDoFront.cidade,
            dadosDoFront.estado,
            dadosDoFront.pais,
            dadosDoFront.nomemae,
            dadosDoFront.rg,
            dadosDoFront.cpf,
            dadosDoFront.datanascimento,
            dadosDoFront.databatismo,
            dadosDoFront.estadocivil,
            dadosDoFront.datauniao,
            dadosDoFront.empregado,
            dadosDoFront.profissao,
            dadosDoFront.escolaridade,
            dadosDoFront.email,
            dadosDoFront.foneresidencial,
            dadosDoFront.celular,
            dadosDoFront.fonerecados,
            dadosDoFront.veiodaigreja,
            dadosDoFront.posicao,
            dadosDoFront.edirigente           
        ]

        db.query(query, values, function(err, results) {
            if (err) throw `Database Error ${err}`

            callback(results.rows)
        })

    }
}