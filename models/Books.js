const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    authors: {
        type: Array,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },

});
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;