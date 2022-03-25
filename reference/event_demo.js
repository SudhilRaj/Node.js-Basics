// Basic steps for creating and calling events (Refer index.js for another example)

// Getting events module
const EventEmitter = require('events');

// Create class
class MyEmiitter extends EventEmitter{}

// Init object
const myEmitter = new MyEmiitter();

// Create Event Listner
myEmitter.on('event', ()=> console.log('Event Fired!'))

// Init event
myEmitter.emit('event');