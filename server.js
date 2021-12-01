const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//My routes
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
const port = process.env.PORT || 8080;

//When using pug temp engine
//app.set("view engine", "pug");

//When using ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
  res
    .status(404)
    .render("error", {
      pageTitle: "404 ERROR",
      errorCode: 404,
      message: "Page Not Found!!!",
    });
});

app.listen(port, () => {
  console.log(`Listning to port number ${port}`);
});
