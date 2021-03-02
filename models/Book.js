const mongoose = require('moongose');

const BookSchema = new mongoose.BookSchema({

    title: {
        type: String,
        require: true
    },

    isbn: {
        type: String,
        require: true
    },
    author: {

        type: String,
        require: true
    },
    description: {
        type: String
    },
    published_date: {
        type: Date
    },
    update_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = Book = mongoose.model('book', BookSchema);