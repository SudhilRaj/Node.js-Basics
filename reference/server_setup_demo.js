// Getting all the required modules
const http = require('http');
const path = require('path');
const fs = require('fs');

// Creating a server
const server = http.createServer((req, res) => {
    // ****** GENERAL WAY OF HANDLING DIFFERENT REQUEST URLS (Not Preffered) *******

    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, '../public', 'index.html'), (err, content)=> {
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type':'text/html'});
    //         res.end(content); //or simply res.end('<h1>Home</h1>');
    //     })
    // }

    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, '../public', 'about.html'), (err, content)=> {
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type':'text/html'});
    //         res.end(content);
    //     })
    // }

    // if(req.url === '/api/users'){
    //     const users = [
    //         {name: 'Sudhil', age: 29},
    //         {name: 'Anu', age: 24},
    //     ];
    //     res.writeHead(200, {'Content-Type':'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    // ****** COMMON CODE TO HANDLE EVERYTHING TOGETHER *******

    // Build file path
    let filePath = path.join(__dirname, '../public', req.url === '/' ? 'index.html' : req.url);

    // Extension of file
    let extName = path.extname(filePath);

    // Initial content type
    let ContentType = 'text/html';

    // Check ext and set content type
    switch(extName){
        case '.js':
            ContentType = 'text/javascript';
            break;
        case '.css':
            ContentType = 'text/css';
            break;
        case '.json':
            ContentType = 'application/json';
            break;
        case '.png':
            ContentType = 'image/png';
            break;
        case '.jpg':
            ContentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code === 'ENOENT'){
                // Page not found
                fs.readFile(path.join(__dirname, '../public', '404.html'), (err, content)=> {
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.end(content, 'utf8');
                })
            }else{
                // Some server errors
                res.writeHead(500);
                res.end(`Server error ${err.code}`);
            }
        }else{
            // Success
            res.writeHead(200, {'Content-Type': ContentType});
            res.end(content, 'utf8');
        }
    })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

// After running server it will show index.html (http://localhost:5000/). Try accessing about.html (http://localhost:5000/about.html).
// If we try users.json (http://localhost:5000/users.json) we will get the complete json object. We can utilize this way for serving APIs.
// MORE - We can try free deployment in Heroku - Note related to Node.js