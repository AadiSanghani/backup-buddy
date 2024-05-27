const mongoose = require("mongoose");
const { Schema } = mongoose;

// Contact Schema
const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
});

// User Schema
const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  name: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  contacts: [contactSchema], // Array of contacts
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
