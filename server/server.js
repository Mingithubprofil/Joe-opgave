const express = require("express");
const cors = require("cors");
const path = require("path")
const mime = require("mime")

const app = express();

const customerRoute = require("./routes/customer");

app.use(cors());
app.use(express.json());

app.use("/customer", customerRoute);

app.get('/styles/global.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname + '/client/styles/global.css');
});

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, '../client/pages/home.html');
  const contentType = mime.getType(filePath);
  res.setHeader('Content-Type', contentType);
  res.sendFile(filePath);
});




app.use(express.static(path.join(__dirname, 'client')));


app.listen(3000, () => {
  console.log("Server open on port 3000");
});
