const express = require("express");
const mongoose  = require("mongoose");
 
 const hostname = 'localhost';
 const port = 3000;

const dishesRoute = require("./routes/dishesRoute");
const promotionsRoute = require("./routes/promotionsRoute");
const leadersRoute = require("./routes/leadersRoute");

const url = 'mongodb://127.0.0.1:27017/assignment2';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

const app = express();

app.use(express.json());

app.use("/dishes", dishesRoute);
app.use("/promotions", promotionsRoute);
app.use("/leaders", leadersRoute);

app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});