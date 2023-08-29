const express = require('express');
const app = express();
const dotenv = require("dotenv");
const port = 8800

//routes
const authRoute = require("./routes/auth")

dotenv.config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
.then(() => console.log("Connected to MongoDB..."))
.catch(err => console.log("Failed to connect to MongoDB with error: " + err))

app.use(express.json());
app.use("/api/v1/auth", authRoute);

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
})