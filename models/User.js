const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please provide a first name"],
  },
  emailAddress: {
    type: String,
    required: [true, "Please provide an email address."],
    unique: [true, "Sorry, this email address already existed."],
  },
  password: {
    type: String,
    minLength: [7, "Password must be up to 7 and above."],
  },
  
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);