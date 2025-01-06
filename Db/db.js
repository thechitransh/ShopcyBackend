const moongoose = require("mongoose");

const db = moongoose
  .connect(
    `mongodb+srv://chitranshnow:gS7HCnByA3SpWw9M@shopapp.gqp1k.mongodb.net/?retryWrites=true&w=majority&appName=shopapp`
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("connection failed");
  });

module.exports = db;
