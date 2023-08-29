const express = require('express');
const app = express();
const dotenv = require("dotenv");
const port = 8800

dotenv.config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB..."))
.catch(err => console.log("Failed to connect to MongoDB with error: " + err))

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
})