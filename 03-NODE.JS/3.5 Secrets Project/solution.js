  import express from "express";
  import bodyParser from "body-parser";
  import { dirname } from "path";
  import { fileURLToPath } from "url";
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const app = express();
  const port = 3000;

  var userIsAuthorised = false;

  app.use(bodyParser.urlencoded({ extended: true }));


  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
  function passwordCheck(req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
      userIsAuthorised = true;
      console.log("middleware running");
      
    }
    next();
  }
  app.use(passwordCheck);

  app.post("/check", (req, res) => {
    if (userIsAuthorised) {
      res.sendFile(__dirname + "/public/secret.html");
    } else {
      res.sendFile(__dirname + "/public/index.html");
      //Alternatively res.redirect("/");
    }
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });