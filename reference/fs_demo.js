// Getting fs and path modules
const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, 'testfolder'), {}, err => {
//     if(err) throw err;
//     console.log("Folder Created");
// })


// Create and write to file
fs.writeFile(path.join(__dirname, 'testfolder', 'hello.txt'), 'Hello this is file content!' , err => {
    if(err) throw err;
    console.log("File written to..");
})

// Read file
fs.readFile(path.join(__dirname, 'testfolder', 'hello.txt'), 'utf-8' , (err, data) => {
    if(err) throw err;
    console.log(data);
})

// Append file, Rename file , etc