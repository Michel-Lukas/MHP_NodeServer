// require csvtojson module
const CSVToJSON = require('csvtojson');

let json;

// convert users.csv file to JSON array
CSVToJSON().fromFile('db.csv')
    .then(users => {
        // Log Users and write them onto variable
        console.log(users);
        json = users
});

// Declare Express
const express = require("express")

const app = express()

// API endpoint
app.get("/api", function (req, res) {
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })
    res.send(JSON.stringify(json))
})

const cors = require("cors")

app.use(cors({
    origin: "*"
}))

// Start server on Port 3000
app.listen(3000, () =>
    console.log("Backend running on port 3000")
)








