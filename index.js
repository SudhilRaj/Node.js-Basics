// Simple console
console.log("Hello")  

// Getting a module using require
const person = require('./person'); 
console.log(person);
console.log(person.name);

// Getting a class module using require
const PersonClass = require('./personClass');
const p1 = new PersonClass("Sudhil", 29);
p1.greetings();


// Every file is wrapped with an inbult 'Module wrapper' 
// Which includes exports, require, module, __filename, __dirname
console.log(__filename);
console.log(__dirname);


// Event Logger example (logger.js)
const Logger = require('./logger')
const logger = new Logger();
logger.on('message', (data) => console.log('Called Listner:', data )); // Calling the event
logger.log('Hello world'); // Calling actual method with data



//To Run: node index.js