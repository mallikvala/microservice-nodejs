var appRouter = function(app) {
  app.get("/mallik/all", function(req, res) {
    var returnObject = {
      description: 'Tieto boys Rock!',
    }
    res.send(returnObject);
  });
}

module.exports = appRouter;
