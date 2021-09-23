const knex = require('../config/database')


module.exports = (server, client) => {
    // Busca Todas as empresas
    server.get('/companies', (req, resp, next) => {
        try{

            client.get('companies', (err, data) => {
                if (err) {
                    console.error(err)
                    throw err
                }
                  
                if (data) {
                    console.log('Company retrieved from Redis');
                    resp.send(JSON.parse(data))
                } else {
                    knex('company')
                        .then(resultado => {
                            const empresa = JSON.stringify(resultado)
                            client.setnx('companies', empresa)
                            console.log('Company retrieved from the knex')
                            resp.send(JSON.parse(empresa));
                        })
                        .catch(error =>{
                            resp.json({ error: error.message })
                        })
                }
            })
        } catch (err) {
            resp.json({ error: err.message });
        }
    });

    // Busca as empresas conforme o termo
    server.post('/company/:term', (req, resp, next) => {
        let term = req.params.term
        knex('company')
            .where('company.business_name', 'like', `%${term}%`)
            .then(data => {
                resp.json({data})
            })
            .catch(error =>{
                resp.status(500).json({ error: error.message })
            })
    });
    
}