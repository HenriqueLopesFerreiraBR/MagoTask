const User = require("../models/User");

class UserController {
    async register(req, res) {
        try {
            const { username } = req.body;
            const newUser = new User({ username });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const user = await User.findById(req.params.userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.userId,
                req.body,
                { new: true }
            );
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.userId);
            if (deletedUser) {
                res.status(200).json(deletedUser);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new UserController();
