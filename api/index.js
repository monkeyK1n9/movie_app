const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const port = 8800

//routes
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const moviesRoute = require("./routes/movies");
const listsRoute = require("./routes/lists");

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
app.use(cors());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/movies", moviesRoute);
app.use("/api/v1/lists", listsRoute);

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
})