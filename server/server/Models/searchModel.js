const mongoose  = require("mongoose");

const SearchSchema= new mongoose.Schema({
    "place":String,
    "counter":Number,
})

const searchModel = mongoose.model('searchCounter',SearchSchema)
module.exports = searchModel;
