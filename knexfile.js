module.exports = {
    client: 'mysql2',
    connection: {
        database: 'reloaddb',
        host: '172.16.250.11',
        user: 'root',
        password: 't00secret',
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/config/migrations`
    },
    seeds: {
        directory: `${__dirname}/config/seeds`
      }
}