const BaseRoute = require('./base/baseRoute')
const service = require(`./../service`)

class ApiRoutes extends BaseRoute {
    constructor() {
        super();
    }

    init() {
        return {
            path: '/',
            method: 'GET',
            handler: (request, headers) => {
                return `<b>Rotas disponíveis</b> <br> 
                /company <br>
                /desktop <br>
                /desktop/{idcompany} <br>
                /contributor/{idcompany} <br><br><br>
                Exemplo de idcompany: 40068, 1787, 82010`
            }
        }
    }

    listallcompany() {
        return {
            path: '/company',
            method: 'GET',
            handler: (request, headers) => {
                const empresa = service.getAllCompany()
                return empresa;
            }
        }
    }

    listalldesktops() {
        return {
            path: '/desktop',
            method: 'GET',
            handler: (request, headers) => {
                const desktop = service.getAllDesktops()
                return desktop;
            }
        }
    }

    listdesktop() {
        return {
            path: '/desktop/{idcompany}',
            method: 'GET',
            handler: (request, headers) => {
                try {
                    const idcompany = request.params.idcompany
                    
                    const empresa = service.getDesktops(parseInt(idcompany))
                    return empresa;
                    
                } catch (error) {
                    console.log('ERRO ', error)
                    return "Erro Interno no Servidor"
                }
            }
        }
    }

    listcontributor() {
        return {
            path: '/contributor/{idcompany}',
            method: 'GET',
            handler: (request, headers) => {
                try {
                    const idcompany = request.params.idcompany
                    
                    const empresa = service.getContributors(parseInt(idcompany))
                    return empresa;
                    
                } catch (error) {
                    console.log('ERRO ', error)
                    return "Erro Interno no Servidor"
                }
            }
        }
    }
}

module.exports = ApiRoutes