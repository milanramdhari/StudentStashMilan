const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors')
const authRouter = require("./routes/auth.route.js");

// app.use(cors())
app.use(cors({
    origin: '*', // Frontend origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow Authorization header
}));
app.use(bodyParser.json()) // for parsing application/json or can use EXPRESS.JSON
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use("/studentstash", authRouter);

app.listen(4000, () => {
    console.log("server is running");
});