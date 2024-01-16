const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT,()=>{
    
    console.log('API IS RUNNNING ${PORT}')
    
})

app.get( '/',(req,res)=>{
    
    res.send('this is my API running')
    
})

app.get( '/about',(req,res)=>{
    
    res.send('this is my API running')
    
})
module.exports = app