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

// Add dependency
const http = require("http")

const host = "localhost"
const port = 3000

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.end(JSON.stringify(json))
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})







