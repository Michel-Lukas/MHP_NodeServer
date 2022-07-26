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

const express = require("express")

const app = express()

app.get("/api", function (req, res) {
    res.status(200).send(json)
})

app.listen(3000, () =>
    console.log("Backend running on port 3000")
)








