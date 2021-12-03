const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//My routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorControler = require("./controller/error");
const app = express();
const port = process.env.PORT || 8080;

//When using pug temp engine
//app.set("view engine", "pug");

//When using ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorControler.error);

app.listen(port, () => {
  console.log(`Listning to port number ${port}`);
});
