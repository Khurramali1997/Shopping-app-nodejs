exports.error = (req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
  res.status(404).render("error", {
    pageTitle: "404 ERROR",
    errorCode: 404,
    message: "Page Not Found!!!",
  });
};
