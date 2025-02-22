import User from "../user/user.model.js"

export const existEmail = async(email = '') =>{
    const existe = await User.findOne({email})
    if(existe){
        throw new Error(`El email ${email} ya fue registrado previamente`)
    }
}

export const existUsername = async(username = '') =>{
    const existe = await User.findOne({username})
    if (existe) {
        throw new Error(`El username ${username} ya fue registrado previamente`)
    }
}

export const userExist = async(uid = '') => {
    const existe = await User.findById(uid)
    if(!existe) {
        throw new Error("El usuario no existe")    
    }
}

export const getUserByIdValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(userExists),
    validarCampos
]

export const deleteUserValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(userExists),
    validarCampos
]

export const updatePasswordValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(userExists),
    body("newPassword").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    validarCampos
]

export const updateUserValidator = [
    param("uid", "No es un ID válido").isMongoId(),
    param("uid").custom(userExists),
    validarCampos
]