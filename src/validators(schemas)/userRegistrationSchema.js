const Joi = require("joi");

const userRegistrationSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required().messages({
    "string.empty": "First name is required.",
    "string.min": "First name must be at least 2 characters.",
    "string.max": "First name cannot exceed 30 characters.",
    "any.required": "First name is required.",
  }),

  lastName: Joi.string().min(2).max(30).required().messages({
    "string.empty": "Last name is required.",
    "string.min": "Last name must be at least 2 characters.",
    "string.max": "Last name cannot exceed 30 characters.",
    "any.required": "Last name is required.",
  }),

  email: Joi.string().email().required().messages({
    "string.empty": "Email is required.",
    "string.email": "Please provide a valid email address.",
    "any.required": "Email is required.",
  }),

  password: Joi.string().min(6).required().messages({
    "string.empty": "Password is required.",
    "string.min": "Password must be at least 6 characters.",
    "any.required": "Password is required.",
  }),
});

module.exports = userRegistrationSchema;
