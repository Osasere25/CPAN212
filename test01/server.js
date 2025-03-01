const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 8080;

app.use('/', routes);

app.listen (PORT, () =>{
    console.log(`Server is running on http... localhost: ${PORT}`);
})
