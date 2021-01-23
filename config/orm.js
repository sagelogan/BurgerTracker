let connection = require("./connection.js");
let orm = {
    selectAll: function(callBack) {
        var queryString = "SELECT * FROM burgers";
            connection.query(queryString, function(err, result) {
            if (err) throw err;
            callBack(result);
            });
      },
      insertOne: function(burger_name,callBack) {
        var queryString = "INSERT INTO burgers (burger_name) Values(?);";
            connection.query(queryString, [burger_name], function(err, result) {
            if (err) throw err;
            callBack(result);
            });
      },
      updateOne: function(devoured,id,callBack) {
        var queryString = "Update burgers SET devoured = ? where id =?;";
            connection.query(queryString, [devoured,id], function(err, result) {
            if (err) throw err;
            callBack(result);
            });
    }
};
module.exports = orm;