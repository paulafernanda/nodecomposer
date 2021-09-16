const Sequelize = require('sequelize') 
const driver = new Sequelize(
    'reloaddb',
    'root',
    't00secret',
    {
        host: '172.16.250.11',
        dialect: 'mysql',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)

async function main(){
    const empresa = driver.define('reloaddb', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            required: true,
            autoIncrement: true
        },
        bussinessname: {
            type: Sequelize.STRING,
        }
    }, {
        tableName: 'company',
        freezeTabelName: false
    })

    await empresa.sync()

    const result = await empresa.findAll({raw:true})
    console.log(result)
}

main()