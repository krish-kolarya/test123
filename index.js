require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;
app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.get('/twitter',(req,res)=>{
    res.send('krishnadotcom');
})

app.get('/kk',(req,res)=>{
    res.send('<h1>Krishna Kolarya</h1>');
})

app.listen(process.env.PORT,()=>{
    console.log(`done ${port}`);
})