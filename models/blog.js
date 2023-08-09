const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: true,
    },
    description:{
      type: String,
      require: true,
    },
   

  },
  { timestamps: true }
);

//create collection
const BlogModel = mongoose.model("blog", BlogSchema);
//                                     ^ collection name

module.exports = BlogModel;
