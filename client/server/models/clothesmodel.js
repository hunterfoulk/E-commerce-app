const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clothesSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String
    //required: true
  },

  imgurl: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    required: true
  }
  /* clothes: [] */
});

const Clothes = mongoose.model("clothes", clothesSchema);

module.exports = Clothes;
