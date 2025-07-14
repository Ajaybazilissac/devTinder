const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstname: "Ajay", lastname: "Issac" });
});

app.post("/user", (req, res) => {
  console.log("Save Data to the database");
  res.send("Data successfully saved to the database.");
});
app.delete("/user", (req, res) => {
  res.send("Deleted successfully.");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on PORT 3000");
});
