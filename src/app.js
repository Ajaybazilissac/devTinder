const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  console.log(req.params);
  res.send({ firstname: "Ajay", lastname: "Issac" });
});

app.listen(3000, () => {
  console.log("Server is successfully listening on PORT 3000");
});
