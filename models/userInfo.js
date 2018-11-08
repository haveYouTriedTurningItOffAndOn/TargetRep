const mongoose = require("mongoose");
// const bcrypt = require('bcrypt-node.js');

const Schema = mongoose.Schema;


const users = new Schema({
  name: { 
      type: String, 
      trim: true,
      
    },
  email: { 
      type: String, 
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"] 
    },
  password:{
      type: String,
      required: true,
      validate: [
        function(input) {
          return input.length >= 6;
        },
        "Password should be longer than 6 characters."
      ]
  },
});


//encrypt and compare passowrds
// users.methods.hashPassword= function(password){
//   return bcrypt.hashSync(password, bcrypt.genSaltsync(10))
// }
// users.methods.comparePassowrd = function(password,hash){
//   return bcrypt.compareSync(password,hash)
// }

const user = mongoose.model("user", users);

module.exports = user;