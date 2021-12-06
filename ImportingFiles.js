console.log("Hello Node")  //Print Function
const fs=require('fs') //Importing File System
//fs.writeFileSync('Notes.txt', 'Hahaha I rock')
//used to write text to a text file
//fs.appendFileSync('Notes.txt', '\nHahaha I always rock')
//used to write text to a text file

const checkUtils=require('./utils') //Importing utils.js file
checkUtils()  //Call the funtion

const validator=require('validator') //Importing validator npm module, we need to install it in Console to use it
console.log(validator.isEmail('etherakh@hun.com')) 
console.log(validator.isURL('8etherakhhun.com'))
console.log("Bye Bye Node")
