const express = require("express");
const path = require("path");

const app = express();

//app.use("client", express.static(path.resolve(__dirname, "/client")));
app.use("/client", express.static(__dirname + "/client"));

app.get("/*", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "/client", "./index.html"));
  res.sendFile("index.html", { root: "client" });
});

app.listen(process.env.PORT || 5000, () => console.log("sever is running ..."));
