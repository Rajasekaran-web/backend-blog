const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    passWord: {
        type: String,
    },
    // rowStatus: {
    //     type: Number,
    //     required: true
    // },
    // companyMaster: {
    //     type: Schema.ObjectId,
    //     ref: 'companyMaster'
    // },
    // locationMaster: {
    //     type: Schema.ObjectId,
    //     ref: 'locationMaster',
    // },
    // designationMaster: {
    //     type: Schema.ObjectId,
    //     ref: 'designationMaster',
    // },
    // loginStatus: {
    //     type: Number,
    //     required: true
    // },
    // updatedDateTime: {
    //     type: Date
    // },
    // createdUser: {
    //     type: Schema.ObjectId,
    // },
    // updatedUser: {
    //     type: Schema.ObjectId,
    // },
});

const User = mongoose.model('User', userSchema);

module.exports = User;