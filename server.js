const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello Node API");
});

app.listen(3000, () => {
  console.log("Node API is running on port 3000");
});
