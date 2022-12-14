const Joi = require('joi');

const signInSchema = Joi.object({
  email: Joi
    .string()
    .min(12)
    .max(100)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi
    .string()
    .min(7)
    .alphanum(),
  repeat_password: Joi
    .ref('password'),
});

module.exports = { signInSchema };
