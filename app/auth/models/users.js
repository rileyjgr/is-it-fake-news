const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//Create Schema
const userSchema = new Schema({
    username: String,
    password: String,
    email: String
});


//Create a model

const User = mongoose.model('user', userSchema);

// Export the model

module.exports = User;