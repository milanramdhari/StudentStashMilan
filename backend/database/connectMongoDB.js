const mongoose = require("mongoose");
const { userSchema, productSchema }= require("./schema.js");


const userCollection = mongoose.model("User", userSchema);
const productCollection = mongoose.model("Product", productSchema);

async function connectMongoDb() {
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/studentStash");
        console.log("database is connected");
    } catch (error) {
        console.log({'error': error})
    }
}

module.exports = {connectMongoDb, userCollection, productCollection};

