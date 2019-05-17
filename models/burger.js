const orm = require("../config/orm");


const burger = {
    getAllBurgers: function (callback) {
        orm.selectAll("burgers_db", function(response){
            callback(response);
        });
    },
    makeNewBurger: function (burgerName, callback) {
        orm.insertOne("burger_db", "burger_name", burgerName, function (response) {
            callback(response);
        });
    },
    updateBurgerStatus: function (burgerName, callback) {
        orm.updateOne("burger_db", "devoured", true, "burger_name", burgerName, function (response) {
            callback(response);
        });
    }
};

module.exports = burger;