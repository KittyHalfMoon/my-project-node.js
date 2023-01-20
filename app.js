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
const PORT = 3000//process.env.PORT;
const path = require('path');
const { render } = require('ejs');

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'/public/')));  // html




app.set('views','./src/views')
app.set('view engine','ejs')




app.get("/",(req,res)=>{  //if don't have static file ( index html file)  use this
    // res.send( '<h1>hello world</h1>')
    // กรณีใช้กับ ejs 
    res.render('index',{ username:'cee',customer:['a','b','c'] });
})


app.listen(PORT, ()=>{
    console.log('Lisening Port1',chalk.red(PORT)); //just plain txt
    debug('Lisening Port',PORT); 
})






// app.use(morgan('combined'))