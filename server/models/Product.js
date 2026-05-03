const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  title_ar: { type: String },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  images: [String],
  sizes: [String],
  colors: [String],
  description: { type: String },
  description_ar: { type: String },
  stock: { type: Number, default: 10 },
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

// Controller
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ status: 'success', data: { products } });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ status: 'success', data: { product } });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ status: 'success', data: { product: newProduct } });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

module.exports = { Product, productController: exports };
