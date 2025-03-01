const express = require('express');
const router = express.Router();

router.get('/fetch', (req, res) => {
    res.send('You have entered the route to retrieve data');
});

router.get('/save', (req, res) =>{
    res.send('You have entered the route to save/write data');
});

router.get('/delete', (req, res) => {
    res.send('You have entered the route to delete data');
})

module.exports = router;
