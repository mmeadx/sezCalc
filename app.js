require('dotenv').config(); // to mask MongoDB pw

// npm modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// connecting to MongoDB via Mongoose
mongoose.connect("mongodb+srv://admin-mattmead:" + process.env.API_PASS + "@cluster0.tg1ue.mongodb.net/calcDB", { useNewUrlParser: true, useUnifiedTopology: true });

const calculationsSchema = new mongoose.Schema({
    name: String
});

const Calculation = mongoose.model("Calculation", calculationsSchema);

app.get("/", (req, res) => {

    // Get's most recent 10 equations
    var query = Calculation.find({}).limit(10).sort({_id: -1});
    query.exec(function (err, foundCalc) {
        res.render("calculator", {foundEquations: foundCalc});
    });
    
});

app.post("/", (req, res) => {

    // when new calculation is complete - save to calcDB
    const newCalc = req.body.newCalc;
    console.log(req.body);
    const calculation = new Calculation({
        name: newCalc
    });

    calculation.save(); // Save calculation to calcDB
    res.redirect("/"); // Reload page
})


app.post("/delete", (req, res) => {
    Calculation.deleteMany({}, function(err) {
        if(!err){
            console.log("deleted all");
            res.redirect("/");
        } else {
            console.log(err);
        }
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function () {
    console.log("Service Started");
});