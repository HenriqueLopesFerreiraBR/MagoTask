const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        completed: { type: Boolean, default: false },
        xp: { type: Number },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
