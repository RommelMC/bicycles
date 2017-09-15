// require mongoose
var mongoose = require('mongoose');
// create the schema
var BicycleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true, min: 1},
    location: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true, maxlength: 200},
    owner: {type: String},
})
// register the schema as a model
BicycleSchema.statics.random = function(callback) {
    this.count(function(err, count) {
      if (err) {
        return callback(err);
      }
      var rand = Math.floor(Math.random() * count);
      this.findOne().skip(rand).exec(callback);
    }.bind(this));
  };
var Bicycle = mongoose.model('Bicycle', BicycleSchema);