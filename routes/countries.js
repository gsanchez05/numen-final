const express = require('express');
const router = express.Router();
const { crearPais, vistaPaises, vistaPais, editarPais, borrarPais/*, consultaAxios */} = require("../controller/controller");
const { check, validationResult, body } = require("express-validator");

/* CREATE + Validations */
router.post("/crear", [
    check("country").not().isEmpty().withMessage("Debes ingresar el nombre del pais."),
    check("alpha2").not().isEmpty().isLength({ max: 2, min: 2 }).withMessage("Debes ingresar el codigo ISO Alpha-2 del pais y este mismo debe tener 2 caracteres."),
    check("alpha3").not().isEmpty().isLength({ max: 3, min: 3 }).withMessage("Debes ingresar el codigo ISO Alpha-3 del pais y este mismo debe tener 3 caracteres."),
    check("uncode").not().isEmpty().withMessage("Debes ingresar el UN Code del pais y este mismo debe ser numerico.")],
    crearPais);
/* READ ONE*/
router.get("/ver/:id", vistaPais);
/* READ ALL */
router.get("/ver", vistaPaises);
/* UPDATE */
router.put("/editar/:id", editarPais);
/* DELETE */
router.delete("/eliminar/:id", borrarPais)

module.exports = router;