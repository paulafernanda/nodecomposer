const knex = require('../config/database')

module.exports = (server, client) => {

    // Busca todos os desktops
    server.get('/desktops', (req, resp, next) => {
        try{

            client.get('desktops', (err, data) => {
                if (err) {
                    console.error(err);
                    throw err;
                  }
            
                  if (data) {
                    console.log('Desktop retrieved from Redis');
                    resp.send(JSON.parse(data))
                  } else {
                    knex('desktop')
                        .then(resultado => {
                            const desktop = JSON.stringify(resultado)
                            client.setnx('desktops', desktop)
                            console.log('Desktop retrieved from the knex')
                            resp.send(JSON.parse(desktop))
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

    // Busca os desktops conforme o id da empresa
    server.get('/desktops/:idcompany', function (req, resp, next) {
        let idcompany = req.params.idcompany

        knex('desktop')
            .where('desktop.company_code_id', '=', idcompany)
            .then(resultado => {
                resp.json({resultado})
            })
            .catch(error =>{
                resp.json({ error: error.message })
            })
    });
}