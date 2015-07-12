var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    title: {
        type: String

    },
    text: String,
    published: {
        type: Boolean
    },
    slug: {
        type: String
    }
});


module.exports = mongoose.model('Article', articleSchema);