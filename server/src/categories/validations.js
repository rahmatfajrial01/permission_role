const { textField, numberField } = require("../utils/fields");
const { validationMiddleware } = require("../utils/middlewares");

const categoryValidationCreate = validationMiddleware([
  textField("name"),
  numberField("price"),
  numberField("stock"),
]);

const categoryValidationUpdate = validationMiddleware([
  textField("name"),
  numberField("price", true),
  numberField("stock", true),
]);

module.exports = {
  categoryValidationCreate,
  categoryValidationUpdate,
};
