const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type:String, unique:true, required:true},
  password: { type: String, required: [true, "Password cannot be blank"] },
  name: String,
  profilePic:String
});

// to see how to implement this
userSchema.plugin(passportLocalMongoose)

const User = mongoose.model("User", userSchema);
module.exports = User;
