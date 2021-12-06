const fs=require('fs')
const book={
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}
const bookJSON=JSON.stringify(book) // Converts JavaScript object into JSON string
const bookObject=JSON.parse(bookJSON) // Converts JSON string into object
//console.log(bookObject.title)
//console.log(bookObject)
//console.log(book)
//console.log(bookJSON)
fs.writeFileSync("jsonFile.json", bookJSON)
console.log((fs.readFileSync('jsonFile.json')).toString())