const express = require("express");
const cors = require("cors");
const path = require("path")
const mime = require("mime")

const app = express();

const customerRoute = require("./routes/customer");

app.use(cors());
app.use(express.json());

app.use("/customer", customerRoute);

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, '../client/pages/home.html');
  res.sendFile(filePath);
});

app.use('/client/styles', express.static(path.join(__dirname, 'client/styles'), {
  setHeaders: (res, filePath) => {
    const contentType = mime.getType(filePath);
    res.setHeader('Content-Type', contentType);
  },
}));

app.listen(3000, () => {
  console.log("Server open on port 3000");
});
