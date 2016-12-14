var express = require('express');
var router = express.Router();
var db = require('../models/db.js');

db.init();

router.use(function(req, res, next) {
    console.log("" + req.method + " " + req.path + " " + req.ip);
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

router.route('/favorites/:user_id')

    .get(function(req, res){
        res.json(db.data.data);
    })

    .put(function(req, res){
        db.data.data[req.params.user_id-1] = req.body;
        res.json({"message":"successful"});
    })

    .post(function(req, res){
        db.data.data.push(req.body);
        res.json({"message":"successful"});
    });

router.route('/login')

    .post(function(req, res){
        // I know this is terrible but I need a quick fix
        if (req.body.user == "user" && req.body.pass == "pass") {
            var ret = {"message":"successful", "favorites":db.data.data, "_id":1};
            res.json(ret);
        } else {
            res.json({"message":"Incorrect username or password"});
        }
    });

module.exports = router;
