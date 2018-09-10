const fs = require('fs');
var fileName = './reader/note.json';

var noteObject = {
    title: "Parthi",
    body: "Software Developer"
};

var write = (note) => {
    var notes = read();
   
    var duplicateNotes = notes.filter((n => (n.title == note.title)));
    
    if(!duplicateNotes.length) {
        notes.push(note);
        fs.writeFileSync(fileName, JSON.stringify(notes));
    }
    else {
        console.log('Duplicate Value', note.title);
    }
}

var writeAll = (notes) => {
    fs.writeFileSync(fileName, JSON.stringify(notes));
}

var read = () => {
    let notes=[];
    try {
        var noteString = fs.readFileSync(fileName, 'utf8', (err, data) => {});
        if(noteString)
            notes= JSON.parse(noteString);
    }
    catch(e) {
        console.log(e);
        console.log('File not found');
    }
    return notes;
}

module.exports = {
    write,
    read,
    writeAll
};