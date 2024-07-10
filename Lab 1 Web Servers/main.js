console.log("Hello World!");

const express = require('express'); 
const my_test_routes = require('./routes/testing-routes'); 

const portA = 3000; 
const portB = 3030; 
const portC = 2030; 
const app = express();

//request a web page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Backend Development! Web Servers<h1>');
});

//gets from the next directory in the root directory
app.use('/', express.static('public'));

// Route reference
app.use('/test-routes', my_test_routes);

// Listens to port A 
app.listen(portA, () => {
    console.log(`Listening to application at: http://localhost:${portA}`);
});

// Listens to port B
app.listen(portB, () => {
    console.log(`Listening to application at: http://localhost:${portB}`);
});

// Listens to port C
app.listen(portC, () => {
    console.log(`Listening to application at: http://localhost:${portC}`);
});

// NOTE - Terminate running ports Ctrl + C on node.js web-servers