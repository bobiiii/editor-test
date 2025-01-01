const { default: mongoose } = require('mongoose');

const blogSchema = mongoose.Schema({
  bannerImage: {
    type: String,
  },
  blogTitle: {
    type: String,
  },

  date: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
});

const BlogModel = mongoose.model('editorblogtest', blogSchema);
module.exports = BlogModel;
