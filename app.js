// chalk
const chalk = require('chalk')          //ปรับสีได้
// debug
const debug = require('debug')('app');
// morgan
const morgan = require('morgan')
// app
const express = require('express');
const app = express();
// port
const port = 3000;

app.use(morgan('combined'))

app.get("/",(req,res)=>{
    res.send( '<h1>hello world</h1>')
})

app.listen(port, ()=>{
    console.log('Lisening Porttttt',chalk.red(port)); //just plain txt
    debug('Lisening Port',port); 
})






// app.use(morgan('combined'))