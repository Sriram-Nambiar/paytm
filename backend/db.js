require("dotenv").config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGODB_URL);
const user = new Schema({
   
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,

});

const user = mongoose.model('user', user);

module.exports = {
    user
};
