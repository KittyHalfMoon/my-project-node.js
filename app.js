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
const PORT = process.env.PORT;
const path = require('path')

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'/public/')));  // html

app.get("/",(req,res)=>{            //if don't have static file
    res.send( '<h1>hello world</h1>')
})

app.listen(PORT, ()=>{
    console.log('Lisening Port1',chalk.red(PORT)); //just plain txt
    debug('Lisening Port',PORT); 
})






// app.use(morgan('combined'))