const express = require('express');
const router = express.Router();
const multer = require('multer');
const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const rolesMiddleware = require('../middlewares/roles.middleware');

const typeRole = require('../constants/type.role');

const {
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} = require('../controllers/category.controller');

const upload = multer({
  dest: 'uploads/',
});
router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    rolesMiddleware(typeRole.ADMIN),
    upload.single('img'),
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
