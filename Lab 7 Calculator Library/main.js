const express = require("express");

// map all routes to the express app
const calculatorRoutes = require("./routes/calculator-routes");
const app = express();
const port = 3300;

// gets from the next directory in the root directory
app.use("/", express.static("public"));

// Route reference
app.use("/calculator", calculatorRoutes);

// Listens at a specific port 
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

// export the app
module.exports = app;

// NOTE - Terminate running ports Ctrl + C on node.js web-servers

