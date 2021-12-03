exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.render("add-product", { pageTitle: "Add Product" });
};

const products = [];

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  res.render("shop", { prods: products, docTitle: "Shop" });
};
