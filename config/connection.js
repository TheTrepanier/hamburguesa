const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};


connection.connect(function (error) {
    if (error) {
        console.error("THERE WAS AN ERROR", error);
        return;
    }
    console.log("Connected with ID: ", connection.threadId);
    
});

module.exports = connection;