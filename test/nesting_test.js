const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// Describe the tests
describe('Nesting records', function(){

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        })
    });

// Create tests
it('Creates an author with sub-documents', function(done){
    const maxT = new Author({
        name: 'Max Tucker', 
        books:[{title:'I Hope They Serve Beer in Hell', pages: 345}]
    });
    maxT.save().then(function(){
        Author.findOne({name:'Max Tucker'}).then(function(record){
            assert(record.books.length === 1);
            done();
        });
    });
  });  

// Adding another nested object(book) to author
  it('Adds another book to an author', function(done){
    const maxT = new Author({
        name:'Max Tucker',
        books:[{title:'I Hope They Serve Beer In Hell', pages: 345}]
    });

    maxT.save().then(function(){
        Author.findOne({name: 'Max Tucker'}).then(function(record){
            // add a book to the books array
            record.books.push({title:"Assholes Finish First", pages: 350});
            record.save().then(function(){
                Author.findOne({name:'Max Tucker'}).then(function(result){
                    assert(result.books.length === 2);
                    done();
                })
            })
        })
    })
  });
  

});