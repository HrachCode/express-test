const express  = require('express')
const app = express();

app.get('*',(req,res)=>{
    res.send('<h1>hello worold</h1>')
})

app.listen(8080,console.log('listening port 8080')
)