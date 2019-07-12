const mongoose = require("mongoose");

// to support ES6 Promises
mongoose.Promise = global.Promise;

// To connect to the db before tests are run. before() is a mocha hook. Other hooks are beforeEach() after() and afterEach()
before(function(done) {
  // Connect to mongodb
  mongoose.connect("mongodb://localhost/reviewdb", {
    useNewUrlParser: true,
    useFindAndModify: false
  });

  mongoose.connection
    .once("open", function() {
      console.log("Connected. Go rock the casbah!");
      done();
      ``;
    })
    .on("error", function(error) {
      console.log("Connection error.", error);
      ``;
    });
});

// To drop collection before each test
beforeEach(function(done) {
  // drop the collection
  mongoose.connection.collections.mariochars.drop(function() {
    done();
  });
});
