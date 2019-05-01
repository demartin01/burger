const router = require("express").Router();
const burger = require("../model/burger.js");

router.get("/", function(req, res) {
    burger.all(function(burgerData) {
        res.render("index", {burger_data: burgerData});
    });
});

router.post('/burgers/create', function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.json(result);
    });
});

router.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        res.json(result);
    });
});

router.delete("/burgers/:id", function(req, res) {
    burger.delete(req.params.id, function(result) {
        res.json(result);
    });
});

module.exports = router;