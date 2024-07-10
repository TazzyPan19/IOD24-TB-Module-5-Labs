const express = require('express');
const router = express.Router();

router.get('/test1', (req, res) => {
    res.send('Web Servers Testing 1!');
})

router.get('/test2', (req, res) => {
    res.send('Web Servers Testing 2!');
})

router.get('/test3', (req, res) => {
    res.send('Web Servers Testing 3!');
})

module.exports = router;