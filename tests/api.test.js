const assert = require('assert')
const { stat } = require('fs')
const api = require('./../api')
let app = {}
describe('Suite de teste', function(){
    this.beforeAll(async () => {
        app = await api
    })

    it('lista /company', async ()=> {
        const result = await app.inject({
            method: 'GET',
            url: '/company'
        })

        const dados = Json.parse(result.payload)
        const statusCode = result.statusCode
        assert.deepEqual(statusCode, 200)
        assert.ok(Array.isArray(dados))
    })
})