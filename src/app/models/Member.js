const { query } = require('../../config/db');
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

    },
    mostrarUm(id, callback) {
        db.query(`SELECT * FROM membros WHERE id = $1`, [id], function(err, results) {
            if (err) throw `Database Error ${err}`

            callback(results.rows[0])
        })
    },
    editarUm(id, callback) {
        db.query(`SELECT * FROM membros WHERE id = $1`, [id], function(err, results) {
            if (err) throw `Database Error ${err}`

            callback(results.rows[0])
        })
    },
    update(dadosDoFront, callback) {
        const query = `
            UPDATE membros SET 
                nome=$1,
                endereco=$2,         
                numero=$3,
                complemento=$4,
                bairro=$5,
                cep=$6,
                cidade=$7,
                estado=$8,
                pais=$9,
                nomemae=$10,
                rg=$11,
                cpf=$12,
                datanascimento=$13,
                databatismo=$14,
                estadocivil=$15,
                datauniao=$16,
                empregado=$17,
                profissao=$18,
                escolaridade=$19,
                email=$20,
                foneresidencial=$21,
                celular=$22,
                fonerecados=$23,
                veiodaigreja=$24,
                posicao=$25,
                edirigente=$26
            WHERE id = $27
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
            dadosDoFront.edirigente,
            dadosDoFront.id       
        ]

        db.query(query, values, function(err, results) {
            if (err) throw `Database Error ${err}`
            
            callback()
        })
    },
    apagar(id, callback) {
        db.query('DELETE FROM membros WHERE id = $1', [id], function(err, results) {
            if (err) throw `Database Error! ${err}`

            callback()
        })
    }
}