const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ajaybazilissac93:TbFaTYRwcybhVlZ7@namastenode.52l3lew.mongodb.net/devTinder"
  );
};
module.exports = connectDB;
