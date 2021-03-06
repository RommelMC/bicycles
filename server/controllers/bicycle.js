var mongoose = require('mongoose');
var Bike = mongoose.model('Bicycle');
var User = mongoose.model('User');
var bcrypt = require('bcrypt'); 

module.exports = {
  index: function(req, res) {
    res.render('index');
  },

  register: function(req, res){
    console.log(req.body);
    req.body.hashed=false;
    var user = new User(req.body);

    user.save(function(err){
      if(err == null)
        req.session.curr = user;
      res.json(err);
    })
  },

  login: function(req, res){
    console.log(req.body);
    User.findOne({email:req.body.email}, function(err, user){
      if(err)
        console.log('error');
      else{
        if(user == null){
          res.json(false);
        }
        else if(bcrypt.compareSync(req.body.password, user.password)){
            console.log(req.body.password);
            req.session.curr = user;
            res.json(true);
        }
        else{
          console.log('LOGIN FAILED');
            res.json(false);
        }
      }
    })
  },

  create: function(req, res){
    console.log("GOT HERE");
    User.findOne({_id: req.session.curr._id}, function(err, user){
      req.body._owner = user._id;
      var bike = new Bike(req.body);
      bike.save(function(err){
        console.log("BEFORE");
        console.log(user);
        // user.bikes.push(bike._id);
        console.log("ADDED BIKE");
        console.log(user);
        user.save(function(err){
          console.log("saving user!!");
          console.log(user);
          console.log("gsgsdggfsgs");
          if(!err){
            console.log("NO ERROR");
            req.session.curr = user;
            res.json(true);
          }
          else{
            console.log("ERROR");
            res.json(err);
          }
        })
      })
      
    })
  },

  allBikes: function(req, res){
    Bike.find({}, function(err, bikes){
      if(err){
        console.log("QQQQQQQQQ");
        res.json('error');
      }
      else
        res.json(bikes);
    })
  },

  myBikes: function(req, res){
    Bike.find({_owner: req.session.curr._id}, function(err, bikes){
      if(err){
        console.log("QQQQQQQQQ");
        res.json('error');
      }
      else
        res.json(bikes);
    })
  },

  currentUser: function(req, res){
    res.json(req.session.curr)
  },

  updateBike: function(req, res){
    console.log("OOKOKOKOKOK");
    console.log(req.body.title);
    Bike.findOne({_id: req.params.id}, function(err, bike){
      console.log("THE BIKE");
      console.log(bike);
      bike.title = req.body.title;
      bike.price = req.body.price;
      bike.location = req.body.location;
      bike.image = req.body.image;
      bike.description = req.body.description;
      bike.save(function(err){
        res.json(true);
      })
    })
  },

  deleteBike: function(req, res){
    Bike.remove({_id: req.params.id}, function(err){
      res.json(err);
    })
  },

  logoff: function(req, res){
    delete req.session.curr;
    res.json(true);
  },

  randomBike: function(req, res){
    Bike.random(function(err, bike){
      res.send(bike);
    })
  }
}
