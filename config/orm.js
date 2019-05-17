const connection = require("./connection");

let orm = {
    selectAll: function (tableName, callback) {
        connection.query("SELECT * FROM ??", [tableName], function (error, result) {
            if (error) {
                console.error(error);
                return;
            }
            callback(result);
        });
    },
    insertOne: function (tableName, colName, colValue, callback) {
        connection.query("INSERT INTO ?? (??) VALUES (??)", [tableName, colName, colValue], function (error, result) {
            if (error) {
                console.error(error);
                return;
            }
            callback(result);
        });
    },
    updateOne: function (tableName, colName, colValue, conditionCol, conditionVal, callback) {
        connection.query("UPDATE ?? SET ?? = ?? WHERE ?? = ??", [tableName, colName, colValue, conditionCol, conditionVal], function (error, result) {
            if (error) {
                console.error(error);
                return;
            }
            callback(result);
        });
    }
};

module.exports = orm;