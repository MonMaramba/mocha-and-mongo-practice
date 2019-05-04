const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model
// Books Schema
const BookSchema = new Schema({
    title: String, 
    pages: Number,    
});

// Author Schema
const AuthorSchema = new Schema({
    name: String, 
    age: Number,
    books: [BookSchema] // nesting the book schema into an array
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
