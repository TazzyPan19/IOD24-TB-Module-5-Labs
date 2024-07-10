const express = require("express");

// map all routes to the express app
const productsRoutes = require("./routes/product-routes");
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const app = express();
const port = 3300;

// gets from the next directory in the root directory
app.use("/", express.static("public"));

// Route reference
app.use('/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

// Route reference
app.use('/products', productsRoutes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

// export the app
module.exports =  { app } ;

// NOTE - Terminate running ports Ctrl + C on node.js web-servers

