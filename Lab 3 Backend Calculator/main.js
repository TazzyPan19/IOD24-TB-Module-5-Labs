const express = require('express'); 
const calc_routes = require('./routes/calculator-routes');
const portA = 3000; 
const app = express();

//gets from the next directory in the root directory
app.use('/', express.static('public'));

// Route reference
app.use('/calc-routes', calc_routes);

// starts the backend app on the given port
app.listen(portA, () => {
    console.log(`Listening to application at: http://localhost:${portA}`);
});

// NOTE - Terminate running ports Ctrl + C on node.js web-servers