const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    label: {
        type: String,
    },
    price: {
        type: String,
    },
    condition: {
        type: String,
    },
    description: {
        type: String,
    },
})

const userSchema = new mongoose.Schema({
    name : {
        type: String,       
    },
    username : {
        type: String,
    },
    email : {
        type: String,
    },
    password: {
        type: String,       
    },
    school: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    bio: {
        type: String,
    },
    listings: {
        type: [productSchema],
    }

})


module.exports = {userSchema, productSchema}