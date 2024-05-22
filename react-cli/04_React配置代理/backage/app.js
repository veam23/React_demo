const express = require('express')
const app = express()


app.use((request,response,next)=>{
    console.log('有人请求了app服务器');
    console.log('服务器来自于',request.get('Host'));
    console.log('请求的地址',request.url);
    next()
})

app.get('/cups',(request,response)=>{
    const cups = [
        {id:1,name:'校长',age:100},
        {id:2,name:'小溪',age:56},
    ]
    response.send(cups)
})


app.listen(5001,(err)=>{
    if(!err) console.log('服务器App启动成功，请求地址为:http://localhost:5001/cups');
})
