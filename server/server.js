const express = require("express");
const cors = require("cors");

const app = express();

const customerRoute = require("./routes/customer");

app.use(cors());
app.use(express.json());

app.use("/customer", customerRoute);

app.get("/", (req, res) => {
  res.sendFile('client/pages/home.html', {root: __dirname })
});

app.listen(3000, () => {
  console.log("Server open on port 3000");
});
