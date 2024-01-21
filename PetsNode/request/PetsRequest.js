const { validationResult, body } = require("express-validator");
var htmlspecialchars = require("htmlspecialchars")

const validateText = (txt,default_txt = "") => {
  if(txt == undefined) {
    return default_txt
  } else {
    return htmlspecialchars(txt.trim())
  }
}

const validateImage = (req) => {
  let foto_name = ""
  let valid = true;
  const messages = []
  console.log(req.file)
  if(req.file){
    const mimetypes = ["image/webp","image/png","image/jpeg"];
    if(!mimetypes.includes(req.file.mimetype)) {
      messages.push("Neleistinas failo tipas.")
      valid = false
    }

    if(req.file.size > 2 * 1024 * 1024) {
      messages.push("Galima ikelti failus tik iki 2MB.")
      valid = false
    }
    foto_name = validateText(req.file.originalname)
  }
  return [foto_name, valid, messages]
}

module.exports = {
  petValidation: (req) => {
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

    const [foto,foto_valid, foto_messages] = validateImage(req)
    if(foto) {
      pet.foto = foto
      if(!foto_valid) {
        valid = false
        messages.push(...foto_messages)
      }
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
