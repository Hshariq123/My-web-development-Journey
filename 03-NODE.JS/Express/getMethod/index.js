import express from "express";
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("<!DOCTYPE html><head><title>My Webpages</title></head><body><h1>This text is received from server</h1><p>The quick brown</p></body></html>");
    
});
app.get("/about",(req,res)=>{
    res.send("<!DOCTYPE html><head><title>about us</title></head><body><h1>This is about us</h1></body></html>");
    
});
app.get("/Contact%20us",(req,res)=>{
    res.send("<!DOCTYPE html><head><title>Contact us</title></head><body><h1>Contact:</h1><p>Haldwani Uttarakhand</p><p>263139,8979735964</p></body></html>");
    
});
app.listen(3000,()=>{
    console.log(`Server running on port ${port}`);

});