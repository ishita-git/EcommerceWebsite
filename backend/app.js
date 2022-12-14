const express = require("express")
 const errorMiddleWare = require("./middleware/error")
const app = express();

app.use(express.json());

//Route Import
const product = require("./routes/productRoute");

app.use("/api/v1",product);

// Middleware for error
app.use(errorMiddleWare);
module.exports = app;