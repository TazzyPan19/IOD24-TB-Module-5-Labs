const express = require("express"); 
const friendRoutes = require('./routes/friend-routes');

const app = express();
const port = 3000;

// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

//gets from the next directory in the root directory
app.use('/', express.static('public'));

// Route reference
app.use('/friends', friendRoutes);

// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// NOTE - Terminate running ports Ctrl + C on node.js web-servers