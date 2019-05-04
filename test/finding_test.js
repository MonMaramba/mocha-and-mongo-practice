const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests. Covers whole block of tests
describe('Finding records', function(){ 
     var char;
    beforeEach(function(done){

        char = new MarioChar({
            name: 'Mario'
        });
        //  .save is a mongoose method to save an instance of the model to the database
        char.save().then(function(){
            done();                      
        }) 
    })

    // Create tests with each test using it()
    it('Finds a record in the database', function(done){  //done parameter is mocha method
        
        MarioChar.findOne({ name: 'Mario' }).then(function(result){
            assert(result.name === 'Mario');
            done();
        });
    });

    it('Finds a record by ID in the database', function(done){  //done parameter is mocha method
        
        MarioChar.findOne({ _id: char._id }).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });

});