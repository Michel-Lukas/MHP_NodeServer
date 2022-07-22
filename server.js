// Express Module for the server
var express = require("express")
// CSVToJSON Module to turn the db into JSON
const CSVToJSON = require("csvtojson");
// Start app
var app = express()

app.get("/", function (req, res) {
    CSVToJSON().fromFile('db.csv')
        .then(users => {
            console.log(users)
        }).catch(err => {
        // log error if any
        console.log(err);
    });
})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://$s:$s", host, port)
})
