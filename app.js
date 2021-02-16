require('dotenv').config(); // to mask MongoDB pw

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-mattmead:" + process.env.API_PASS + "@cluster0.tg1ue.mongodb.net/calcDB", { useNewUrlParser: true, useUnifiedTopology: true });

const calculationsSchema = new mongoose.Schema({
    name: String
});

const Calculation = mongoose.model("Calculation", calculationsSchema);


// Test database connection by manually inputting data 

// const newCalc1 = new Calculation({
//     name: "6 x 6 = 36"
// });

// const newCalc2 = new Calculation({
//     name: "12 - 112 = -100"
// });

// const defaultItems = [newCalc1, newCalc2];

// Calculation.insertMany(defaultItems, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("input success");
//     }
// });

app.get("/", (req, res) => {

    Calculation.find({}, function (err, foundCalc) {
        res.render("calculator", {foundEquations: foundCalc});
    });
    
});

app.post("/", (req, res) => {

    // when new calculation is complete - save to calcDB
    const newCalc = req.body.newCalc;
    console.log("Post Route Worked!" + newCalc);
    const calculation = new Calculation({
        name: newCalc
    });

    calculation.save();
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("Running on port 3000");
});