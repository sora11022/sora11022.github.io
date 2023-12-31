const ErrorResponse = require('../helpers/ErrorResponse');

module.exports = (roles = []) => {
  if (typeof roles !== 'object') {
    roles = [roles];
  }

  return (req, res, next) => {
    if (!roles.includes(req.account.role)) {
      throw new ErrorResponse(403, 'FORBIDDEN');
    }
    next();
  };
};
