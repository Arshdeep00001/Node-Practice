const command = process.argv[2] //This array contains at least two items. The first is the path to the Node.js executable. The second is the path to the JavaScript file that was executed. Everything after that is a command line argument.
// This is a basic feature of Javascript and NodeJS  
if(command == 'add'){
    console.log("Adding Note")
}
else if(command == 'remove'){
    console.log("Removing Note")
}