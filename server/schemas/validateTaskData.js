const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().min(3).required().messages({
    'any.required': '400|{{#label}} is required',
    'string.empty': '400|{{#label}} is required',
    'string.base': '422|{{#label}} must be a string',
    'string.min': '422|{{#label}} must be at least 3 characters long',
  }),
  description: Joi.string().allow('').messages({
    'string.base': '422|{{#label}} must be a string',
  }),
  startDate: Joi.date().raw().required().messages({
    'any.required': '400|{{#label}} is required',
    'date.base': '422|{{#label}} must be a valid date',
  }),
  endDate : Joi.date().raw().min(Joi.ref('startDate')).messages({
    'date.base': '422|{{#label}} must be a valid date',
    'date.min': '422|{{#label}} must be greater than start date',
  })
});
