// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Contractor = require("../models/contractor.js");



// Contractor Routes
// =============================================================
module.exports = function(app) {

    // Get all chirps
    app.get("/api/all", function(req, res) {

        // Finding all Chirps, and then returning them to the user as JSON.
        // Sequelize queries are aynchronous, which helps with percieved speed.
        // If we want something to be guaranteed to happen after the query, we'll use
        // the .then function
        Contractor.findAll({}).then(function(results) {
            // results are available to us inside the .then
            res.json(results);
        });

    });

    // Add a contractor
    app.post("/api/new", function(req, res) {

        console.log("Contractor Data:");
        console.log(req.body);

        Contractor.create({
            contractor_name: req.body.contractor_name,
            contact_first: req.body.contact_first,
            contact_last: req.body.contact_last,
            construction_trade: req.body.construction_trade,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            phone: req.body.phone,
            website: req.body.website,
            license_number: req.body.license_number,
            business_description: req.body.business_description,
            photo_link: req.body.photo_link,
            created_at: req.body.created_at
        }).then(function(results) {
            // `results` here would be the newly created contractor
            res.end();
        });

    });

};



