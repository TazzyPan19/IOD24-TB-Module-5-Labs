const express = require("express");
const calc_routes = require("./routes/calculator-routes");

const app = express();
const portA = 3000;

//gets from the next directory in the root directory
app.use("/", express.static("public"));

// Route reference
app.use("/calculator", calc_routes);

// Starts the backend app on the given port
app.listen(portA, () => {
    console.log(`Server listening at http://localhost:${portA}`);
  });

// Export the app
module.exports = app;

// NOTE - Terminate running ports Ctrl + C on node.js web-servers