// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies

var express = require('express');
var router = express.Router();
var path = require('path');
// =============================================================
var User = require("../models/user.js"); // Pulls out the User Models
var Contractor = require("../models/contractor.js");



// USER Routes
// =============================================================
module.exports = function(app) {

    // Get all chirps
    //   app.get("/api/all", function(req, res) {

    //     // Finding all Users, and then returning them to the user as JSON.
    //     // Sequelize queries are aynchronous, which helps with percieved speed.
    //     // If we want something to be guaranteed to happen after the query, we'll use
    //     // the .then function
    //     db.User.findAll({}).then(function(results) {
    //       // results are available to us inside the .then
    //       res.json(results);
    //     });

    //   });

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });

    app.get('/contractorsignup', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/contractors.html'));
    });

    app.get('/user/create', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/user.html'));
    });

    app.get('/user/profile', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/profile.html'));
    });

    app.get('/api/user/:routeName', function(req, res) {
        User
            .findOne({ where: { routeName: req.params.routeName } })
            .then(function(user) {
                if (user == null) {
                    return res.status(404).json({ message: 'User not found' });
                }
                return res.status(200).json(user);
            })
            .catch(function() {
                return res.status(500).json({ message: 'Server error' });
            });
    });

    // Adding a new User Profile
    app.post("/api/user", function(req, res) {
        //creating User Profile LABEL in console
        console.log("User Profile:");
        console.log(req.body);
        // creates a name slug
        var routeName = req.body.last_name + req.body.first_name
            //regex to remove whitespace, make it null, and make all lowercase
        routeName.replace(/\s+/g, "").toLowerCase();

        //then add the homeUser to the database using sequelize
        User.create({
            routeName: routeName,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            unit: req.body.unit,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            phone: req.body.phone,
            image_link: req.body.image_link,
            houzz_board: req.body.houzz_board,
            pinterest_board: req.body.pinterest_board,
            budget: req.body.budget,
            project_type: req.body.project_type,
            created_at: req.body.created_at
        }).then(function(results) {
            // `results` here would be the newly created user
            res.status(201).json({
                routeName: routeName
            });
        });

    });
    // delete a users profile
    //   app.post("/api/delete", function(req, res) {
    //     console.log("User Profile:");
    //     console.log(req.body);
    //     User.destroy({
    //       where: {
    //         id: req.body.id
    //       }
    //     });
    //   });
};
