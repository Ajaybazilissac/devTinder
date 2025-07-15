const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
  res.send("user logged in successfully");
});

app.post("/user/data", userAuth, (req, res) => {
  res.send("user logged in successfully!");
});

app.get("/user/data", (req, res) => {
  res.send("user data Send");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data send");
});

app.delete("/admin/deleteUser", (req, res) => {
  res.send("Delete a user");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on PORT 3000");
});
