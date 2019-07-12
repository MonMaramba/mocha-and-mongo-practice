const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe tests. Covers whole block of tests
describe("Deleting records", function() {
  beforeEach(function(done) {
    var char = new MarioChar({
      name: "Mario"
    });
    //  .save is a mongoose method to save an instance of the model to the database
    char.save().then(function() {
      done();
    });
  });

  // Create tests with each test using it()
  it("Deletes a record in the database", function(done) {
    //done parameter is mocha method

    MarioChar.findOneAndDelete({ name: "Mario" }).then(function() {
      MarioChar.findOne({ name: "Mario" }).then(function(result) {
        assert(result === null);
        done();
      });
    });
  });
});
