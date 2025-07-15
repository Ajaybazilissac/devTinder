const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  // Logic of DB call and get user data
  try {
    throw new Error("Some random error");
    res.send("user data Send");
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Server is successfully listening on PORT 3000");
});
