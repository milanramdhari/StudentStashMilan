const express = require("express");
const bcrypt = require("bcrypt");
const {
  connectMongoDb,
  userCollection,
} = require("../database/connectMongoDB");

const router = express.Router();

connectMongoDb();

router.post("/auth/signup", async (req, res) => {
  try {
    var incomingUser = req.body;
    if (
      incomingUser.name === undefined ||
      incomingUser.username == undefined ||
      incomingUser.email == undefined ||
      incomingUser.password == undefined
    ) {
      //notify the user that there is a blank section
      console.log("Empty field");
      return res.status(400).json({success: false, message: "One or more fields are missing"});
    }
    if (incomingUser.username.length < 2) {
      //notify the user that the username is not long enough
      console.log("short username");
      return res.status(400).json({success: false, message: "Username is not long enough"});
    }

    if (incomingUser.password.length < 8) {
      //notify the user that the password is not long enough
      console.log("Short Password");
      return res.status(400).json({success: false, message: "Password is must at least 8 charaters long"})
    }
    var emailRegEx = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    var regExResult = emailRegEx.test(incomingUser.email);
    if (!regExResult) {
      //notify the user that the email format is not correct
      console.log("bad email format")
      return res.status(400).json({success: false , message:"email format is incorrect!"});

    }
    const newUser = {
      name: incomingUser.name,
      username: incomingUser.username,
      email: incomingUser.email,
      password: incomingUser.password,
      //add default values for the rest of the properties in the schemaÍ
    };
    //check if the user already exists in the database using its email
    const initialQuery = await userCollection.findOne({ email: newUser.email });
    if (initialQuery) {

      return res.status(400).json({success: false , message: "email is already taken"});
    }
    //check if the username is already taken -> tricky
    const secondQuery = await userCollection.findOne({
      username: newUser.username,
    });
    if (secondQuery) {
      //notify the user that the username is already taken
      return res.status(400).json({success: false , message: "username is already taken"});
    }
    //hash the password
    //register the user
    const saltRounds = 10;
    const newSalt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(newUser.password, newSalt);
    newUser.password = hashedPassword;
    const createUser = await userCollection.create({
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    });

    //return the necassary information
    return res.status(200).json({success: true, message: "You have successfully registered"});
  } catch (error) {
    console.log({err: error});
  }
});

router.get("/auth/signin", (req, res) => {
  res.send("It works");
});

router.post("/auth/resetPassword", (req, res) => {});

module.exports = router;
