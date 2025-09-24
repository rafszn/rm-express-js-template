const CustomError = require("./customError");

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      stripUnknown: true,
    });

    if (error) {
      return next(new CustomError(error.details[0].message, 400));
    }

    next();
  };
};

module.exports = validateBody;
