const express = require('express');
const app = express();

const port = 3000;
const host = '0.0.0.0';

app.listen(port, host, ()=>{
    console.log(`listening on host ${host}:${port}`)
})