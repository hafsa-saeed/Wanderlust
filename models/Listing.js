const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  Image: {
    type: String,
    default: "/images/Hotel1.jpg",
    set: (v) => (v === "" ? "/images/Hotel1.jpg" : v),
  },
  price: Number,
  location: String,
  country: String,
});
const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
