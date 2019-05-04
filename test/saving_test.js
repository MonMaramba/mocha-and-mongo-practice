const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests. Covers whole block of tests
describe('Saving records', function(){ 

    // Create tests with each test using it()
    it('Saves a record to the database', function(done){  //done parameter is mocha method
        var char = new MarioChar({
            name: 'Mario'
        });
        //  .save is a mongoose method to save an instance of the model to the database
        char.save().then(function(){
            assert(char.isNew === false); // assert is to predict a result. isnew will return true if
            done();                      // char has NOT been saved to the database
        })                                
        
    });
});