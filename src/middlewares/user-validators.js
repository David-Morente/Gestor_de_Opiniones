import { body, param } from "express-validator"
import { existEmail, existUsername, userExist } from "./../helpers/db-validator.js"
import { validarCampos } from "./validar-campos.js"

export const registerValidator = [
    body("name", "El nombre es obligatorio").not().isEmpty(),
    body("username", "El username es obligatorio").not().isEmpty(),
    body("email", "El correo es obligatorio").not().isEmpty(),
    body("email", "Ingrese un correo valido").isEmail(),
    body("email").custom(existEmail),
    body("username").custom(existUsername),
    validarCampos
]

export const loginValidator = [
    body("email").optional().isEmail().withMessage("Ingrese un correo válido"),
    body("username").optional().isString().withMessage("Ingrese un username válido"),
    body("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    validarCampos
]

export const getUserByIdValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(userExist),
    validarCampos
]

export const deleteUserValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(userExist),
    validarCampos
]

export const updatePasswordValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(userExist),
    body("newPassword").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    body("oldPassword").isLength({min: 8}).withMessage("La contraseña antigua debe tener al menos 8 caracteres"),
    validarCampos
]

export const updateUserValidator = [
    param("uid", "No es un ID válido").isMongoId(),
    param("uid").custom(userExist),
    validarCampos
]