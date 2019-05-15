const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function (error) {
    if (error) {
        console.error(error);
        return;
    }
    console.log("Connected with ID: ", connection.threadId);
    
});

module.exports = connection;