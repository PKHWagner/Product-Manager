const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: [true, "Brand Name is required"],
    minlength: [2, "Brand Name must be at least 2 characters long"],
    maxlength: [255, "Brand Name cannot be more than 255 characters long"]
  },
  snowboardName: {
    type: String,
    required: [true, "The Name of the snowboard is required"],
    minlength: [2, "Brand Name must be at least 2 characters long"],
    maxlength: [255, "Brand Name cannot be more than 255 characters long"]
  },
  snowboardReleaseYear: {
    type: Number,
    required: [true, "The Release Year of the snowboard is required"],
    minlength: [1900, "The Release Year must be in the four digit format, ex. 2023"],
  },
  snowboardPrice: {
    type: Number,
    required: [true, "The Release Year of the snowboard is required"],
    minlength: [0.00, "The Price must have a decimal point"],
  },
},{timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);