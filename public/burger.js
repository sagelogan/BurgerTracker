$(function() {
//PUT
    $(".change-devoured").on("click", function(event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevoured");
        let newDevourState = {

          devoured: newDevour

        };
    
       
        $.ajax("/api/burgers/" + id, {

          type: "PUT",
          data: newDevourState

        }).then(
          function() {

            console.log("changed", newDevour);
            location.reload();

          }
        );
      });
    
//POST
      $(".create-form").on("submit", function(event) {

        event.preventDefault();
        let newBurger = {

          name: $("#nb").val().trim(),

        };

        $.ajax("/api/burgers", {

          type: "POST",
          data: newBurger

        }).then(
          function() {

            console.log("new burger");
            location.reload();

          }
        );
      });
    });