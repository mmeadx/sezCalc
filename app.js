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

// const newCalc1 = new Calculation({
//     name: "6 x 6 = 36"
// });

app.get("/", (req, res) => {

    Calculation.find({}, function (err, foundCalc) {
        res.render("calculator", {foundEquations: foundCalc});
    });
    
});

app.post("/", (req, res) => {

    // when new calculation is complete - save to calcDB
    const newCalc = req.body.newCalc;
    console.log(newCalc);
    const calculation = new Calculation({
        name: newCalc
    });

    calculation.save();
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("Running on port 3000");
});