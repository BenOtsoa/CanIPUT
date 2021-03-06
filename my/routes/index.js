let express = require('express');
let router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET paramètre 101 et Query Level */
router.get("/forms-:numero(\\d+)", function(req, res, next) {
  console.log(req.params.numero);
  console.log(req.query.level);
});

/* POST affiche le contenu de la requête en console */
router.post('/forms-101', (req, res) => {
  console.log(req.body.username); // retourne Bob
});



/* GET COUCOU PUG*/
router.get('/coucou-pug', function(req, res, next) {
  res.render('coucou', { sayHello: 'Hello Buddy!'});
});






module.exports = router;
