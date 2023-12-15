const authRouter = require('./auth.router');
const categoryRouter = require('./category.router');
const userRouter = require('./user.router');
const ErrorHandle = require('../middlewares/error.handle');

module.exports = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/category', categoryRouter);
  app.use('/api/accounts', userRouter);

  app.use(ErrorHandle);
};
