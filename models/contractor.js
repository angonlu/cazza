// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Contractor = sequelize.define("contractors", {
    routeName: {
        type: Sequelize.STRING
    },
    contractor_name: {
        type: Sequelize.STRING
    },
    contact_first: {
        type: Sequelize.STRING
    },
    contact_last: {
        type: Sequelize.STRING
    },
    construction_trade: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    zip_code: {
        type: Sequelize.INTEGER
    },
    phone: {
        type: Sequelize.INTEGER
    },
    website: {
        type: Sequelize.STRING
    },
    license_number: {
        type: Sequelize.STRING
    },
    business_description: {
        type: Sequelize.STRING
    },
    photo_link: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

// Syncs with DB
Contractor.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Contractor;