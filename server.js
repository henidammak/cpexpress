const express = require("express");
const app = express();
const fs = require("fs");


app.use(express.static("public"));
app.get("/", (req, res) => {
  fs.readFile("./public/Home.html", "utf-8", (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.get("/service", (req, res) => {
  fs.readFile("./public/OurServices.html", "utf-8", (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.get("/contact", (req, res) => {
  fs.readFile("./public/ContactUs.html", "utf-8", (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server running on port ${PORT}`)
);
