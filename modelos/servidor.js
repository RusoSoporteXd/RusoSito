const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
    guildID: String,
    prefijo: String,
})

const model = mongoose.model("configServer", serverSchema);

module.exports = model;