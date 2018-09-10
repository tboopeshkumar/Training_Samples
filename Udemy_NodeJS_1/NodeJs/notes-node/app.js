console.log('Starting Main app..')

//In built Library
const fs = require('fs');
const os = require('os');

//My own js file
const notes = require('./notes.js');

//Third Party Library
const _ = require('lodash');
const yargs = require('yargs');



// var user = os.userInfo();
// var sum = notes.Sum(10,15);

// console.log(_.isString(true));
// console.log(_.isString('parthi'));
//  console.log(_.uniq(['parthi',1,2,3,4,6,"a",'parthi',3,"b","a"]))

// console.log(sum);
// fs.appendFile('greetings.txt', `Hello ${user.username} You are ${notes.age}`, (err)=>{});

//var argv = yargs.argv;
// console.log(argv);
//var command = argv._[0];

const title = {
    describe : 'Title of the node',
    demand : true,
    alias : 't'
};

const body = {
    describe : 'Body of the node',
    demand : true,
    alias : 'b'
};

const argv = yargs
    .command('add','add a new node', {
        title,
        body
    }).help().argv;

var command = argv._[0];

if(command == 'add') {
    console.log('Adding Note');
    notes.add(argv.title, argv.body);
}
else if(command == 'remove') {
    console.log('Remove Note');
    notes.remove(argv.title);
}
else if(command == 'list') {
    console.log('Listing Note');
    notes.list();
}
else if(command == 'read') {
    console.log('Reading Note');
    notes.read(argv.title);
}
else {
    console.log('Not recognised command');
}



