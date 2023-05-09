const Product = require("../models/product.model");

module.exports = {
  // CREATE
createProduct: (req, res) => {
  Product.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch(err => res.status(400).json(err));
},

  // READ
  getAllProducts: (req, res) => {
    Product.find()
      .then(allProducts => res.json(allShows))
      .catch(err => res.json(err));
  },

  // UPDATE
  updateProduct: (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      .then(updatedProduct => res.json(updatedProduct))
      .catch(err => res.json(err));
  },

  // DELETE
  deleteProduct: (req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  }

}