// CVStoJSON Module
const CSVToJSON = require('csvtojson')

let json

// convert CSV to JSON Array
CSVToJSON().fromFile('db.csv')
    .then(users => {
        // users is a JSON array
        // log the JSON array
        json = users
    }).catch(err => {
    // log error if any
    console.log(err);
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
    res.status(200).send(json)
})

const cors = require("cors")

app.use(cors({
    origin: "*"
}))

// Start server on Port 3000
app.listen(3000, () =>
    console.log("Backend running on port 3000")
)








