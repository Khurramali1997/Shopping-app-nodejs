const Products = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Products(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Products.fetchAll((products) => {
    res.render("shop", { prods: products, docTitle: "Shop" });
  });
  //res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};
