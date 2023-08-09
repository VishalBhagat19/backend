const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
name:{
      type: String,
      required: true,
    },
    email:{
      type: String,
      require: true,
    },
    password:{
        type:String,
        require:true,
    },
    image:{
      public_id: {
        type: String,
        
      },
      url: {
        type: String,
         
      },
    },
   

  },
  { timestamps: true }
);

//create collection
const UserModel = mongoose.model("user", UserSchema);
//                                     ^ collection name

module.exports = UserModel;
