let mongoose = require('mongoose');

//create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{   
    //this is a table's name
    collection: "books"
});

// Export the model
module.exports = mongoose.model('Book', bookModel);