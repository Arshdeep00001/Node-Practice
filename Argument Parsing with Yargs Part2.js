const { title } = require('process');
const yargs=require('yargs')

yargs.command({
    command:'add',
    describe:'Add Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Adding a New Note'); //Output
        console.log('Title'+ title);
        console.log('Title'+ title);
    }
})
console.log(yargs.argv)