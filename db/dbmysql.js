const mysql = require('mysql2/promise');

const dbName = "reloaddb";

mysql.createConnection({
    host: '172.16.250.11',
    port: '3306',
    user: 'root',
    password: 't00secret',
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Database create or successfully checked");
        process.exit(0);
    })
})



// const mysql = require('mysql')

// const con = mysql.createConnection({
//     host: '172.16.250.11', 
//     user: 'root', 
//     password: 't00secret'
// });

// con.connect(function(err) {
//     if (err) {
//         console.log('Erro connecting to database...', err)
//         return
//     }
//     console.log("Connected!");
//     con.query("CREATE DATABASE IF NOT EXISTS reloaddb", function (err, result) {
//       if (err) {
//         console.log('Erro connecting to database...', err)
//         return
//       }
//       console.log("Database created");
//     });
//   });


// con.end((err) => {
//     if(err) {
//         console.log('Erro to finish connection...', err)
//         return 
//     }
//     console.log('The connection was finish...')
// })
