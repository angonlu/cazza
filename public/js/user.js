/* global moment */

// When user clicks add-btn
$("#user-submit").on("click", function(event) {
    event.preventDefault();

    // Make a newUSER object
    var newUSER = {
        first_name: $("#first_name").val().trim(),
        last_name: $("#last_name").val().trim(),
        email: $("#email").val().trim(),
        password: $("#password").val().trim(),
        address: $("#address").val().trim(),
        street: $("#street").val().trim(),
        unit: $("#unit").val().trim(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
        zip: $("#zip").val().trim(),
        phone: $("#phone").val().trim(),
        image_link: $("#image_link").val().trim(),
        houzz_board: $("#houzz_board").val().trim(),
        pinterest_board: $("#pinterest_board").val().trim(),
        budget: $("#budget").val().trim(),
        project_type: $("#project_type").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newUSER);

    // Send an AJAX POST-request with jQuery
    $.post("/api/user", newUSER)
        // On success, run the following code
        .done(function(newUserInfo) {

            var row = $("<div>");
            row.addClass("user");

            row.append("<p>" + newUSER.first_name + newUSER.last_name, 'Profile Added: </p>');
            row.append("<p>" + newUSER.email + "</p>");
            row.append("<p>" + newUSER.password + "</p>");
            row.append("<p>" + newUSER.address + newUSER.street + newUSER.unit, "</p>");
            row.append("<p>" + newUSER.city + newUSER.state + newUSER.zip, "</p>");
            row.append("<p>" + newUSER.phone + "</p>");
            row.append("<p>" + newUSER.image_link + "</p>");
            row.append("<p>" + newUSER.houzz_board + "</p>");
            row.append("<p>" + newUSER.pinterest_board + "</p>");
            row.append("<p>" + newUSER.budget + "</p>");
            row.append("<p>" + newUSER.project_type + "</p>");
            row.append("<p>Created Profile " + moment(newUSER.created_at).format("h:mma on dddd") + "</p>");

            $("#user-area").prepend(row);

            window.location.href = "http://localhost:8080/user/profile?user=" + newUserInfo.routeName
        });

    // Empty each input box by replacing the value with an empty string

    $("#first_name").val("");
    $("#last_name").val("");
    $("#email").val("");
    $("#password").val("");
    $("#address").val("");
    $("#street").val("");
    $("#unit").val("");
    $("#city").val("");
    $("#state").val("");
    $("#zip").val("");
    $("#phone").val("");
    $("#image_link").val("");
    $("#houzz_board").val("");
    $("#pinterest_board").val("");
    $("#budget").val("");
    $("#projec_type").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            row.addClass("user");


            row.append("<p>" + data[i].first_name + data[i].last_name, " Profile: </p>");
            row.append("<p>" + data[i].email + "</p>");
            row.append("<p>" + data[i].password + "</p>");
            row.append("<p>" + data[i].address + data[i].street + data[i].unit, "</p>");
            row.append("<p>" + data[i].city + data[i].state + data[i].zip, "</p>");
            row.append("<p>" + data[i].phone + "</p>");
            row.append("<p>" + data[i].image_link + "</p>");
            row.append("<p>" + data[i].houzz_board + "</p>");
            row.append("<p>" + data[i].pinterest_board + "</p>");
            row.append("<p>" + data[i].budget + "</p>");
            row.append("<p>" + data[i].project_type + "</p>");
            row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

            $("#user-area").prepend(row);

        }

    }
});