const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    phone: String,
    password: String,
}, {
    timestamps: true,
    toObject: {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret.password;
            delete ret.__v;
            return ret;
        }
    }
});

module.exports = mongoose.model('User', userSchema);