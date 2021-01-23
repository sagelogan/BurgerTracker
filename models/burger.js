let orm = require("../config/orm.js");

let burger = {
    
    selectAll: function(callBack){
        orm.selectAll(function(res){
            callBack(res);
        })
    },

    insertOne: function(burger_name, callBack){
        orm.insertOne(burger_name, callBack)
    },

    updateOne: function(devoured, id, callBack){
        orm.updateOne(devoured, id, function(res){
            callBack(res);
        });
    },

};

module.exports = burger;