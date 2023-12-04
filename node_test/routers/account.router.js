const express = require('express');
const router = express.Router();

const {
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
  writePdfFile,
} = require('../controllers/account.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const rolesMiddleware = require('../middlewares/roles.middleware');
const typeRole = require('../constants/type.role');
const importExcelFile = require('../excel');

const multer = require('multer');
const upload = multer({
  dest: 'uploads/',
});
router
  .route('/')
  .post(createAccount)
  .get(
    asyncMiddleware(authMiddleware),
    rolesMiddleware(typeRole.ADMIN),
    asyncMiddleware(getAccount),
  );

router
  .route('/:id')
  .patch(
    asyncMiddleware(authMiddleware),
    rolesMiddleware(typeRole.ADMIN),
    asyncMiddleware(updateAccount),
  )
  .delete(
    asyncMiddleware(authMiddleware),
    rolesMiddleware(typeRole.ADMIN),
    asyncMiddleware(deleteAccount),
  );

router.route('/files').get(asyncMiddleware(importExcelFile));

router.route('/pdf').post(upload.single('img'), asyncMiddleware(writePdfFile));
module.exports = router;
