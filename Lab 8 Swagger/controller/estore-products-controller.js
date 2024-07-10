const axios = require("axios");

function getProductAPI(req, res) {
    // fetch('https://fakestoreapi.com/products')
    //     .then(response => response.json())
    //     .then(json => res.send(json))
    //     .catch((error) => res.status(500).json({error: error.message}))

    axios.get('https://fakestoreapi.com/products')
    .then(response => res.status(200).json(response.data))
    .catch(error => res.status(500).json(error.message))
} 

module.exports = { getProductAPI } ;