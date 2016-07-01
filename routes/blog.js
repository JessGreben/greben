var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Blog = require('../controllers/blog');

router.use(bodyParser.json()); //turns POST and PUT JSON into req.body object

router.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', req.headers.origin || req.hostname);
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.set('Access-Control-Allow-Headers', "Content-Type");
    res.set('Access-Control-Allow-Credentials', "true");
    //res.set('Content-Type', 'application/json');
    next();
});

//..controllers/bike.js 

// Get all the bikes
router.get('/', Blog.all); 
// Create a Blog
router.post('/', Blog.create);
// // Remove a Blog
router.delete('/', Blog.remove);
// // Get a Blog
router.get('/:id',Blog.findOne);
// // Updat a Blog
router.put('/:id', Blog.update);


module.exports = router;