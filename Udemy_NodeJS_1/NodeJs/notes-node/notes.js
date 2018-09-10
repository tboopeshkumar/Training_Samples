console.log('Starting Notes app....')

const reader = require('./reader/json')
const _ = require('lodash');

var read = (title) =>{
    console.log('Reading notes', title);
    var notes = reader.read();
    console.log('Note:', notes.filter(n => n.title = title));
}

var list = () =>{
    console.log('List notes')
    console.log(reader.read());
};

var add =(title, body) =>{
    debugger;
    console.log('Adding Notes', title, body);
    reader.write({title, body});
};

var remove = (title)=>{
    console.log('Removing Notes', title)
    const notes = reader.read();
    _.remove(notes, (note)=> note.title === title);
    reader.writeAll(notes);
};

module.exports = {
    read,
    list,
    add,
    remove
};
