let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");

//create all routing for crud 

//display all
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      let dataObject = {
        burgers: data
      };
      console.log(dataObject);
      res.render("index", dataObject);
    });
  });


 //create new burger
  router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(result) {
      res.json({ id: result.insertId });
    });
  });


  // u[pdate burger table
  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    burger.updateOne( 1, req.params.id, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
module.exports = router;