const express = require("express");
const cors = require("cors");
const path = require("path")
const mime = require("mime")

const app = express();

const customerRoute = require("./routes/customer");

app.use(cors());
app.use(express.json());

app.use("/customer", customerRoute);

app.use('/img', express.static(path.join(__dirname, '../client/img')));

app.get("/styles/global.css", (req, res) => {
  const filePath = path.join(__dirname, '../client/styles/global.css'); // Juster stien til CSS-filen
  const contentType = 'text/css'; // CSS-filens MIME-type
  res.setHeader('Content-Type', contentType);
  res.sendFile(filePath);
});

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, '../client/pages/home.html');
  const contentType = mime.getType(filePath);
  res.setHeader('Content-Type', contentType);
  res.sendFile(filePath);
});

// Rute til home.html
app.get('/pages/home.html', (req, res) => {
  const filePath = path.join(__dirname, '../client/pages/home.html');
  res.sendFile(filePath);
});

// Rute til login.html
app.get('/pages/login.html', (req, res) => {
  const filePath = path.join(__dirname, '../client/pages/login.html');
  res.sendFile(filePath);
});





app.use(express.static(path.join(__dirname, 'client')));


app.listen(3000, () => {
  console.log("Server open on port 3000");
});
