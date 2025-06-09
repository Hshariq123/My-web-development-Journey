const http  = require('http');

const server = http.createServer((req,res)=>{
    res.end("End of data");
});
server.listen(3000);