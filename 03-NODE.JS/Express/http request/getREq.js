import express from "express";
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>Hello</h1>");
    
});
app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});