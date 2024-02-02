const Task = require("../models/Task");

class TaksController {
    async create(req, res) {
        try {
            const { title, description, user, category } = req.body;
            const newTask = new Task({ title, description, user, category });
            await newTask.save();
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const tasks = await Task.find();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const task = await Task.findById(req.params.taskId);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update (req,res){
        try {
            const updatedTask = await Task.findByIdAndUpdate(
              req.params.taskId,
              req.body,
              { new: true }
            );
            if (updatedTask) {
              res.status(200).json(updatedTask);
            } else {
              res.status(404).json({ message: 'Task not found' });
            }
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    async delete (req,res) {
        try {
            const deletedTask = await Task.findByIdAndDelete(req.params.taskId);
            if (deletedTask) {
              res.status(200).json(deletedTask);
            } else {
              res.status(404).json({ message: 'Task not found' });
            }
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }
}

module.exports = new TaksController;
