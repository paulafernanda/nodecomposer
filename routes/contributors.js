const knex = require('../config/database')

module.exports = server => {
    // Busca os contributors conforme o id da empresa
    server.get('/contributors/:idcompany', function (req, resp, next) {
        let idcompany = req.params.idcompany

        knex('contributors')
            .where('contributors.company_code_id', '=', idcompany)
            .then(data => {
                resp.json({data})
            })
            .catch(error =>{
                resp.status(500).json({ error: error.message })
            })
    });
}