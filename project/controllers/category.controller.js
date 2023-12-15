const categoryModel = require('../models/categories.model');
const ErrorResponse = require('../helpers/ErrorResponse');

module.exports = {
  createCategory: async (req, res) => {
    try {
      const body = req.body;
      body.img = '/images/' + req.file.filename;
      const newCategory = await categoryModel.create(body);
      return res.status(201).json(newCategory);
    } catch (error) {
      throw new ErrorResponse(500, error.message);
    }
  },
  getCategory: async (req, res) => {
    try {
      const categories = await categoryModel.find();
      return res.status(200).json(categories);
    } catch (error) {
      throw new ErrorResponse(500, 'OOPS!! Some thing went wrong');
    }
  },
  updateCategory: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const body = req.body;
      body.img = '/images/' + req.file.filename;
      const updatedCategory = await categoryModel.findByIdAndUpdate(
        categoryId,
        body,
        {
          new: true,
        },
      );
      return res.status(200).json(updatedCategory);
    } catch (error) {
      throw new ErrorResponse(500, 'OOPS!! Some thing went wrong');
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const categoryId = req.params.id;
      // check id co trong db k?
      const existingItem = await categoryModel.findById(categoryId);
      if (!existingItem) {
        return res.status(404).json({ error: 'Không tìm thấy dữ liệu' });
      }
      //delete cate
      await categoryModel.findByIdAndDelete(categoryId);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa' });
    }
  },
};
