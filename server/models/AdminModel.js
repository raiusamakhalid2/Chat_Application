const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        filename: String,
        path: String,
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('admins', adminSchema);