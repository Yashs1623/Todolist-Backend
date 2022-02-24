const express = require("express");
const bodyParser = require("body-parser");
const currentDate = require(__dirname+"/currentDay.js");

const app = express();
const PORT = 3000;
var newTodos = [];
var workTodos = [];

//new method of ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {

   let day = currentDate.getCurrentDay();
    res.render('list', { listTitle: day, newListItems: newTodos });
});

app.get("/work", function (req, res) {
    res.render('list', { listTitle: "WorkList", newListItems: workTodos })
})

app.post("/", function (req, res) {
    // console.log(req.body);
    var item = req.body.Todo;
    if (req.body.typeOfList === "WorkList") {
        workTodos.push(item);
        res.redirect("/work");
    } else {
        newTodos.push(item);
        res.redirect("/");
    }
});
// res.render('index', {foo: 'FOO'});

app.listen(PORT, function () {
    console.log("Server is running on port " + PORT);
})