const { validationResult, body } = require("express-validator");

module.exports = {
  bookValidation: (req) => {
    let valid = true;
    const messages = [];

    const validacija = validationResult(req);

    const pet = req.body;

    if (!validacija.isEmpty()) {
      for (let i of validacija.array()) {
        messages.push(i.msg);
      }
      valid = false;
    }
    return [pet, valid, messages];
  },
  createValidation: [
    body("species_ID")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Species_ID laukelis negali būti tuščias")
      .isInt()
      .withMessage("Species_ID laukelis turi būti skaičius"),
    body("name")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("name laukelis negali būti tuščias")
      .isLength({ min: 3 })
      .withMessage("vardas yra pertrumpas"),
    body("foto")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("foto laukelis negali būti tuščias"),
    body("email")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("email laukelis negali būti tuščias")
      .isEmail()
      .withMessage("neteisingai parašytas elektroninis paštas"),
  ],
  editValidation: [
    body("species_ID")
      .trim()
      .escape()
      .optional()
      .notEmpty()
      .withMessage("Species_ID laukelis negali būti tuščias")
      .isInt()
      .withMessage("Species_ID laukelis turi būti skaičius"),
    body("name")
      .trim()
      .escape()
      .optional()
      .notEmpty()
      .withMessage("name laukelis negali būti tuščias")
      .isLength({ min: 3 })
      .withMessage("vardas yra pertrumpas"),
    body("foto")
      .trim()
      .escape()
      .optional()
      .notEmpty()
      .withMessage("foto laukelis negali būti tuščias"),
    body("email")
      .trim()
      .escape()
      .optional()
      .notEmpty()
      .withMessage("email laukelis negali būti tuščias")
      .isEmail()
      .withMessage("neteisingai parašytas elektroninis paštas"),
  ],
  
};
