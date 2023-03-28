const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a product Name'],
      unique: true
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Product must belong to a category']
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'Please add a product Description'],
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: [true, 'Product must have a price'],
      maxlength: 32

    },
    image: {
      type: String,
      default: null
    },

  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)
