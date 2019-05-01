const express = require("express");
var exphbs = require("express-handlebars");
var router = require("./controller/burgerControllers.js");

var PORT = process.env.PORT || 3000

var app = express();
    
    app.use(express.static("public"));
    
    app.use(express.json());
    app.use(express.urlencoded({ extend: false }));
    
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");
    
    app.use(router);
    
    app.listen(PORT, function() {
        console.log("Listening on http://localhost:%s", PORT)
    })

