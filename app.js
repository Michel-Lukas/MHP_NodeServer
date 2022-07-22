// CVStoJSON Module
const CSVToJSON = require('csvtojson')

let json

// convert CSV to JSON Array
CSVToJSON().fromFile('db.csv')
    .then(users => {
        // users is a JSON array
        // log the JSON array
        json = users
        console.log(json);
    }).catch(err => {
    // log error if any
    console.log(err);
});

// Starting a server
const http = require("http")

let app = http.createServer((req, res) => {
    // Set Header as JSON
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify(json))
})

app.listen(3000, "127.0.0.1")
console.log("Node Server running on port 3000")

