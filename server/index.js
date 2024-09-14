const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json()) //req.body
app.use(cors());

// ROUTES //

// register and login routes
app.use("/auth", require("./routes/jwtAuth"));

// dashboard route
app.use("/dashboard", require("./routes/dashboard"))


app.listen(5001, () => {
    console.log("server is running on port 5001");
})