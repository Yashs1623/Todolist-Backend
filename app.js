const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

//new method of ejs
app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            break;
    }
    res.render('list', {nameOfDay: day});
});

// res.render('index', {foo: 'FOO'});

app.listen(PORT, function () {
    console.log("Server is running on port " + PORT);
})