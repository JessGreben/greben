// Include Mongoose Model
var BlogModel = require('../models/blog');

Blog = function () {

    var self = this;

    self.all = function (req, res, next) {
        BlogModel.find(function (err, blogs) {
            res.json(blogs)
        });
    };
    
    self.findOne = function (req, res, next) {
        BlogModel.findOne({_id: req.params.id}, function (err, blog) {
            res.json(blog)
        });
    };

    self.update = function (req, res, next) {
        BlogModel.update({_id: req.body._id},req.body, function (err, blog) {
            console.log(blog);
            console.log(err);
            if(err){
                console.log(err);
                res.send(err);
            }
            res.json(blog)
        });
    };

    self.create = function (req, res, next) {
        var myBlog = new BlogModel();
        var blog = req.body.blog;
        myBlog.brand = blog.brand;
        myBlog.price = blog.price;
        myBlog.save(function (err, blog) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(blog)
            }
        });
    };

    self.remove = function (req, res, next) {
        BlogModel.remove({_id: req.query._id}, function (err) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.sendStatus(204)
            }

        })
    }
};

module.exports = new Blog;
