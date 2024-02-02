const  Category  = require('../models/Category')


class CategoryController {
    async create (req,res) {
        try {
            const { name, description } = req.body;
            const newCategory = new Category({ name, description });
            await newCategory.save();
            res.status(201).json(newCategory);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    async getAll (req,res) {
        try {
            const categories = await Category.find();
            res.status(200).json(categories);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    async getById (req,res) {
        try {
            const category = await Category.findById(req.params.categoryId);
            if (category) {
              res.status(200).json(category);
            } else {
              res.status(404).json({ message: 'Category not found' });
            }
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }
    async update (req,res) {
        try {
            const updatedCategory = await Category.findByIdAndUpdate(
              req.params.categoryId,
              req.body,
              { new: true }
            );
            if (updatedCategory) {
              res.status(200).json(updatedCategory);
            } else {
              res.status(404).json({ message: 'Category not found' });
            }
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    async delete (req,res){
        try {
            const deletedCategory = await Category.findByIdAndDelete(req.params.categoryId);
            if (deletedCategory) {
              res.status(200).json(deletedCategory);
            } else {
              res.status(404).json({ message: 'Category not found' });
            }
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }
}

module.exports = new CategoryController