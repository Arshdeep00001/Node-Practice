const yargs = require("yargs"); //Yargs is firstly installed and is a feature of npm
yargs.command({
    command:'add',  //Input
    describe:'Add Note',
    handler:function(){
        console.log('Adding a New Note'); //Output
    }
})
console.log(yargs.argv)