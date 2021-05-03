// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-descrip").on("click", function(event) {
    var id = $(this).data("id");
    var newdescrip = $(this).data("newdescrip");

    var newdescrip = {
      descrip: newdescrip
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDescription
    }).then(
      function() {
        console.log("changed sleep to", newDescription);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgers").val().trim(),
      descrip: $("[name=descrip]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burgers").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burgers", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
