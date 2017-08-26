/* global moment */

// When user clicks add-btn
$("#contractor-submit").on("click", function(event) {
    event.preventDefault();

    // Make a newcontractor object
    var newContractor = {
        contractor_name: $("#contractor_name").val().trim(),
        contact_first: $("#contact_first").val().trim(),
        contact_last: $("#contact_last").val().trim(),
        construction_trade: $("#construction_trade").val().trim(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
        zip_code: $("#zip_code").val().trim(),
        phone: $("#phone").val().trim(),
        website: $("#website").val().trim(),
        license_number: $("#license_number").val().trim(),
        business_description: $("#business_description").val().trim(),
        photo_link: $("#photo_link").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newContractor);

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newContractor)
        // On success, run the following code
        .done(function() {

            var row = $("<div>");
            row.addClass("contractor");

            row.append("<p>" + newContractor.contractor_name + " Added: </p>");
            row.append("<p>" + newContractor.contact_first + "</p>");
            row.append("<p>" + newContractor.contact_last + "</p>");
            row.append("<p>" + newContractor.construction_trade + "</p>");
            row.append("<p>" + newContractor.city + "</p>");
            row.append("<p>" + newContractor.state + "</p>");
            row.append("<p>" + newContractor.zip_code + "</p>");
            row.append("<p>" + newContractor.phone + "</p>");
            row.append("<p>" + newContractor.website + "</p>");
            row.append("<p>" + newContractor.license_number + "</p>");
            row.append("<p>" + newContractor.business_description + "</p>");
            row.append("<p>" + newContractor.photo_link + "</p>");
            row.append("<p>At " + moment(newContractor.created_at).format("h:mma on dddd") + "</p>");

            $("#contractor-area").prepend(row);

            window.location.href = "http://localhost:8080/user/profile?contractor=" + newContractorInfo.routeName
        });

    // Empty each input box by replacing the value with an empty string
    $("#contractor_name").val("");
    $("#contact_first").val("");
    $("#contact_last").val("");
    $("#construction_trade").val("");
    $("#city").val("");
    $("#state").val("");
    $("#zip_code").val("");
    $("#phone").val("");
    $("#website").val("");
    $("#license_number").val("");
    $("#business_description").val("");
    $("#photo_link").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            row.addClass("contractor");

            row.append("<br><p>" + data[i].contractor_name + " Added.. </p>");
            row.append("<p>" + data[i].contact_first + "</p>");
            row.append("<p>" + data[i].contact_last + "</p>");
            row.append("<p>" + data[i].construction_trade + "</p>");
            row.append("<p>" + data[i].city + "</p>");
            row.append("<p>" + data[i].state + "</p>");
            row.append("<p>" + data[i].zip_code + "</p>");
            row.append("<p>" + data[i].phone + "</p>");
            row.append("<p>" + data[i].website + "</p>");
            row.append("<p>" + data[i].license_number + "</p>");
            row.append("<p>" + data[i].business_description + "</p>");
            row.append("<p>" + data[i].photo_link + "</p>");
            row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

            $("#contractor-area").prepend(row);

        }

    }

});