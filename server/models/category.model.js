const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = mongoose.Schema(
    {
        categoryName: { type: String, required: true },
        updated: {
            type: Date
        },
        created: {
            type: Date,
            default: Date.now
        },
    }
)

module.exports = mongoose.model('Category', categorySchema)
