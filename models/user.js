/// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "USER" model that matches up with DB
var User = sequelize.define("users", {
    routeName: {
        type: Sequelize.STRING
    },

    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.TEXT
    },
    unit: {
        type: Sequelize.INTEGER
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    zip_code: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    image_link: {
        type: Sequelize.STRING
    },
    pinterest_board: {
        type: Sequelize.STRING
    },
    houzz_board: {
        type: Sequelize.STRING
    },
    project_type: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE
    },
}, {
    timestamps: true
});

// Syncs with DB
User.sync();
// can add {force:true}  to destory database

// Makes the Chirp Model available for other files (will also create a table)
module.exports = User;