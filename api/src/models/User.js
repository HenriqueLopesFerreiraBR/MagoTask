const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    classe: { type: String, required: true },
    nivel: { type: Number, default: 0 },
    experience: { type: Number, default: 0 },
},{timestamps:true});

module.exports = mongoose.model("User", UserSchema);
