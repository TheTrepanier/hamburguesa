const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function (request, response) {
    burger.getAllBurgers(function (data) {
        let burgerData = {
            burgers: data
        };
        console.log(burgerData);
        response.render("index", burgerData);
    });
});

router.post("/api/burgers", function (request, response) {
    burger.makeNewBurger(request.body.burger, function (result) {
        response.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (request, response) {
    burger.updateBurgerStatus(request.body.burger, function (result) {
        if (result.changedRows == 0) {
            return response.status(404).end();
        } else {
            return response.status(200).end();
        }
    });
});

module.exports = router;