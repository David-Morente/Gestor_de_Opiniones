import { body, param } from "express-validator"
import { categoryExist, existCategoryType } from "./../helpers/db-validator.js"
import { validarCampos } from "./validar-campos.js"

export const createCategorieValidator = [
    body("categoryType", "El tipo es obligatorio").not().isEmpty(),
    body("categoryType").custom(existCategoryType),
    validarCampos
]

export const findCategorieByIdValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(categoryExist),
    validarCampos
]

export const deleteCategorieValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(categoryExist),
    validarCampos
]

export const updateCategorieValidator = [
    param("uid", "No es un ID válido").isMongoId(),
    param("uid").custom(categoryExist),
    validarCampos
]