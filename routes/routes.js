var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    console.log("Request coming in");
    next();
});

router.route('/users')

    .post(function(req, res){
        //TODO: Model setup for creating a new user
    })

    .get(function(req, res){
        //TODO: Return all users
        res.json({message:"GET test"});
    });

router.route('/users/:user_id')

    .get(function(req, res){
        //TODO: Get specific user using req.params.user_id
    })

    .put(function(req, res){
        //TODO: Update specific user using req.params.user_id
    });

module.exports = router;
