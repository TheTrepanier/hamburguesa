const orm = require("../config/orm");


const burger = {
    getAllBurgers: function (callback) {
        orm.selectAll("burgers", function(response){
            callback(response);
        });
    },
    makeNewBurger: function (burgerName, callback) {
        orm.insertOne("burgers", "burger_name", burgerName, function (response) {
            callback(response);
        });
    },
    updateBurgerStatus: function (burgerName, callback) {
        orm.updateOne("burgers", "devoured", true, "burger_name", burgerName, function (response) {
            callback(response);
        });
    }
};

module.exports = burger;