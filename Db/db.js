const moongoose = require("mongoose");

const db = moongoose.connect("mongodb://localhost:27017/store").then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("connection failed");
});

module.exports = db;