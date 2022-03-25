// Getting modules
const EventEmitter = require('events');
const uuid = require('uuid'); // An external package installed via npm

// An event emitter class
class Logger extends EventEmitter{
    log(msg){
        // Call event
        this.emit('message', {id: uuid.v4(), msg })
    }
}

module.exports = Logger;