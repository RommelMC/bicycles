// require mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
// create the schema
var UserSchema = new mongoose.Schema({
  email: {unique: true, type: String, required: true, validate:{
      validator: function(value){
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
      },
      message: "Invalid email"
  }},
  firstName: {type: String, required: true, minlength: 2},
  lastName: {type: String, required: true, minlength: 2},
  password: {type: String, required: true, minlength: 8},
},{timestamp: true})
// register the schema as a model

UserSchema.pre('save', function(done){
    this.password=bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    done();
})

var User = mongoose.model('User', UserSchema);