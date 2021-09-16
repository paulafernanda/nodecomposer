const Hapi = require('hapi')

const ApiRoute = require(`./routes/apiRoutes`)

const app = new Hapi.Server({
    port: 4040
})

function mapRoutes(instance, methods){
    return methods.map(method => instance[method]())
}

async function main(){
    app.route(
        mapRoutes(new ApiRoute(), ApiRoute.methods())
    )

    await app.start()
    console.log(`Servidor rodando na porta `, app.info.port)

    return app
}

module.exports = main()


