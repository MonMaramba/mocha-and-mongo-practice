const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests. Covers whole block of tests
describe('Updating records', function(){ 
        var char;
    beforeEach(function(done){

        char = new MarioChar({
            name: 'Mario',
            weight: 50
        });
        //  .save is a mongoose method to save an instance of the model to the database
        char.save().then(function(){
            done();                      
        }) 
    })

    // Create tests with each test using it()
    it('Update a record in the database', function(done){  //done parameter is mocha method
        
       MarioChar.findOneAndUpdate({name:'Mario'}, {name:'Luigi'}).then(function(){
        MarioChar.findOne({_id: char._id}).then(function(result){
            assert(result.name === 'Luigi');
            done();
        });
       });
    });

// Update operators 
    it('Increments all records in the database', function(done){  //done parameter is mocha method
        
        MarioChar.updateMany({}, {$inc: {weight:1}}).then(function(){ // Empty first param return all records, $inc is the operator
            MarioChar.findOne({name:'Mario'}).then(function(record){
                assert(record.weight === 51);
                done();
            })
        })
     });
});