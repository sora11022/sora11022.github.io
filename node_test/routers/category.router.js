const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const cloudinary = require('../configs/cloudinary');
const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const rolesMiddleware = require('../middlewares/roles.middleware');
const typeRole = require('../constants/type.role');


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'images',
  allowedFormats: ['jpg', 'jpeg', 'png'],
  transformation: [{ width: 500, height: 500, crop: 'limit' }],
});
const upload = multer({
  dest: 'uploads/',
});
const {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');

router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    rolesMiddleware(typeRole.ADMIN),
    upload.single('img'),
    async (req, res) => {
      const link_img = await cloudinary.uploader.upload(req.file.path, {
        public_id: 'username',
        resource_type: 'image',
      });
      res.send(link_img);
    },
    asyncMiddleware(createCategory),
  )
  .get(asyncMiddleware(getCategory));

router
  .route('/:id')
  .patch(
    asyncMiddleware(authMiddleware),
    rolesMiddleware(typeRole.ADMIN),
    upload.single('img'),
    asyncMiddleware(updateCategory),
  )
  .delete(
    asyncMiddleware(authMiddleware),
    rolesMiddleware(typeRole.ADMIN),
    asyncMiddleware(deleteCategory),
  );

module.exports = router;
