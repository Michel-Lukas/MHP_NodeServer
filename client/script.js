let array;

// Fetch Data from API
async function getData() {
    console.log("Getting the Data from REST API")
    const response = await fetch("https://node-json-table-reader.herokuapp.com/api")
    console.log(response)
    const data = await response.json();
    console.log(data)
    // show(data)
    array = data
    console.log("Data received!")
}

getData()

let btnGet = document.querySelector("button")
let myTable = document.querySelector("#table")

let headers = ["id", "name", "email", "country", "age"]

btnGet.addEventListener("click", () => {
    let table = document.createElement("table")
    let headerRow = document.createElement("tr")

    headers.forEach(headerText => {
        let header = document.createElement("th")
        let textNode = document.createTextNode(headerText)
        header.appendChild(textNode)
        headerRow.appendChild(header)
    })

    table.appendChild(headerRow)

    array.forEach(e => {
        let row = document.createElement("tr")

        Object.values(e).forEach(text => {
            let cell = document.createElement("td")
            let textNode = document.createTextNode(text)
            cell.appendChild(textNode)
            row.appendChild(cell)
        })

        table.appendChild(row)
    })

    myTable.appendChild(table)
})