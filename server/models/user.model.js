const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true },
        username: { type: String, required: true },
        status: { type: Boolean, required: true },
        password: { type: String, required: true, minLength: 8 },
        phone: { type:String, required: true, unique: true},
        updated: {
            type: Date
        },
        created: {
            type: Date,
            default: Date.now
        },
        /* For reset password */
        resetPasswordToken: {
            type: String
        },
        resetPasswordExpires: {
            type: Date
        }
    }
)

module.exports = mongoose.model('User', userSchema)
