const { validationResult, body } = require("express-validator");

module.exports = {
  speciesValidation: (req) => {
    let valid = true;
    const messages = [];

    const validacija = validationResult(req);

    const species = req.body;

    if (!validacija.isEmpty()) {
      for (let i of validacija.array()) {
        messages.push(i.msg);
      }
      valid = false;
    }

    return [species, valid, messages];
  },
  createValidation: [
    body("Name")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("name laukelis negali būti tuščias")
      .isLength({ min: 4 })
      .withMessage("vardas yra pertrumpas"),
  ],
};
