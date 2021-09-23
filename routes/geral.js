const knex = require('../config/database')

module.exports = server => {
    // Busca os contributors conforme o id da empresa
    server.get('/', function (req, resp, next) {

        resp.json({
            company: '/companies',
            desktop: '/desktops',
            desktop_by_id: '/desktops/:idcompany',
            contributors_by_id: '/contributors/:idcompany',
            company_termo: '/company/:term',
        })
    });
}