// Creating a basic http server

// Getting http module
const http = require('http');

// Create a server object
http.createServer((req, res)=>{
    // write response
    res.write('Hello World');
    res.end();
}).listen(5000, ()=> console.log('Server running....'))

// This will create a basic server running in http://localhost:5000/ and prints a text 'Hello World'
// For a bit detailed server setup and example, refer server_setup_demo.js