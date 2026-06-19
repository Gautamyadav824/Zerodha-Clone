const mongoose = require('mongoose');
const userSchema = require('../schemas/usersSchema');

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

module.exports = userModel;