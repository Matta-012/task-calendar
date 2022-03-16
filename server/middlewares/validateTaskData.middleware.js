const validateTaskData = require('../schemas/validateTaskData');

module.exports = (req, res, next) => {
  const { error } = validateTaskData.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    console.error({ code, message });

    return res.status(code).json({ message });
  }

  next();
};