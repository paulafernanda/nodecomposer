const restify = require('restify')
const redis = require('redis')

const client = redis.createClient({
    host: '172.16.250.12'
});

const server = restify.createServer({
    name: 'project reload',
    version: '1.0.0',
    host: '172.16.250.1'
})

server.listen(4040, () =>{
    console.log('Server Rodando na porta 3000')
    require('./routes/company')(server, client)
    require('./routes/desktop')(server, client)
    require('./routes/contributors')(server)
    require('./routes/geral')(server)
})


