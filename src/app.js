const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    //Route handler
    //res.send("Route Handler 1");
    next();
    res.send("Route Handler 1");
  },
  (req, res) => {
    res.send("2nd Response");
  }
);

app.listen(3000, () => {
  console.log("Server is successfully listening on PORT 3000");
});
