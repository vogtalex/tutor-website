var mongoose = require('mongoose');

// connect mongoDb
mongoose.connect('mongodb://localhost/test1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    tutor: String,
    major: String,
    imgSrc: String,
    grade: String,
    body: String,
    date: {
        type: Date,
        default: Date.now
    }
})

var Blog = mongoose.model('Blog', blogSchema);


module.exports = Blog