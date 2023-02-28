const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head>')
    res.write('<title>My first Page</title>')
    res.write('</head>')
    res.write('<body>')
    if(req.url == "/home"){
        res.write("<h1>Welcome Home</h1>");
    }else if(req.url == "/about"){
        res.write("<h1>Welcome to about section</h1>");
    }else if(req.url == "/node"){
        res.write("<h1>Welcome to my Node Js project</h1>");
    }else{
        res.write('<h1>Welcome to my nodejs project</h1>')
    }
    res.write('</body>')
    res.write('</html>')
    res.end();
})

server.listen(4000);