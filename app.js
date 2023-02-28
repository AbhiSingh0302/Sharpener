const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('Abhimanyu Singh');
})
server.listen(4000,()=>{
    console.log("Hello World");
});