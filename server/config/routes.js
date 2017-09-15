var bicycles = require('../controllers/bicycle.js');
module.exports = function(app) {
  app.get('/', bicycles.index);
  app.get('/logoff', bicycles.logoff);
  app.get('/randombike', bicycles.randomBike);
  app.post('/register', bicycles.register);
  app.post('/login', bicycles.login);
  app.post('/listings/create', bicycles.create);
  app.get('/listings/bikes', bicycles.allBikes);
  app.get('/listings/mybikes', bicycles.myBikes);
  app.get('/currentUser', bicycles.currentUser);
  app.post('/listings/bikes/update/:id', bicycles.updateBike);
  app.delete('/listings/bikes/delete/:id', bicycles.deleteBike);

}
