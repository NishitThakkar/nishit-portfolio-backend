const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

app.use(cors());
app.use(bodyParser.json())

app.use("/", require("./routes/user"));
const PORT = 7000
connectDB()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log('server connencted at port number ' + PORT);
})



