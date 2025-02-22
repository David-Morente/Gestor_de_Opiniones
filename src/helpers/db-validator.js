import User from "../user/user.model.js"
import Categories from "../categories/categories.model.js"

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

export const existCategoryType = async(categoryType = '') => {
    const existe = await Categories.findOne({categoryType})
    if (existe) {
        throw new Error(`El tipo ${categoryType} ya fue agregado previamente`)
    }
}

export const categoryExist = async(uid= '') => {
    const existe = await Categories.findById(uid)
    if (!existe) {
        throw new Error ("La categoría no existe")
    }
}