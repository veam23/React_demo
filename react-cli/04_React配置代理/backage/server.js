const express = require('express')
const app = express()


app.use((request,response,next)=>{
    console.log('有人请求了Server服务器');
    console.log('服务器来自于',request.get('Host'));
    console.log('请求的地址',request.url);
    next()
})

app.get('/status',(request,response)=>{
    const status = [
        {id:1,name:'小红人',age:100},
        {id:2,name:'小金人',age:56},
    ]
    response.send(status)
})


app.listen(5000,(err)=>{
    if(!err) console.log('服务器Server启动成功，请求地址为:http://localhost:5000/status');
})
