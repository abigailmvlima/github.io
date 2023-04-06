const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  res.sendFile("/index.html");
});
const host = "0.0.0.0";
app.listen(5000, host, () => {
  console.log("Server started on port 5000");
});
