const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

//create a model based on that schema
const Blog = mongoose.model('Blog', blogSchema);
//exporting this model to use it at nay other place
module.exports = Blog;