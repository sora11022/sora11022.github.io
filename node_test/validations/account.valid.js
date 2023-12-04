const Joi = require('joi');

const accountSchemaRegisterValid = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(6)
    .message('username phai dai tu 6-20 ky tu')
    .max(20)
    .message('username phai dai tu 6-20 ky tu')
    .required(),
  password: Joi.string()
    .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/))
    .message(
      'Password tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số',
    )
    .required(),
  fullname: Joi.string().required(),
  dob: Joi.string(),
  phone: Joi.string().required(),
});

module.exports = (account) => accountSchemaRegisterValid.validate(account);
